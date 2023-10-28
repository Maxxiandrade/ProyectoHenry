const { where, Op } = require('sequelize');
const {Dog, Temperament} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const URL = "https://api.thedogapi.com/v1/breeds"



const getDogs = async (req, res)=>{
    try {
        const dbDogs = await Dog.findAll({
            include: Temperament, 
          });
        const {data} = await axios(`${URL}?api_key=${API_KEY}`)      
        const apiDogs = data.map((perro) => {
            return {
              id: perro.id,
              imagen: perro.image.url,
              nombre: perro.name,
              altura: perro.height.metric,
              peso: perro.weight.metric,
              vida: perro.life_span,
              temperamento: perro.temperament
            };
          });

          const dogs = dbDogs.map((dbDog) => ({
            nombre: dbDog.nombre,
            id: dbDog.id,
            altura: `${dbDog.altMin}-${dbDog.altMax} `,
            peso: `${dbDog.pesMin}-${dbDog.pesMax} `,
            vida: dbDog.vida,
            temperamento: dbDog.temperaments.map((temperament) => temperament.name).join(", "),
            originDb: true,
          }));

         
          const allDogs = [...dogs,...apiDogs ];
                res.status(200).json(allDogs)
    } catch (error) {
            res.status(500).json({error: error.message})
        };
};



const dogById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}?api_key=${API_KEY}`);
        const perroEncontrado = data.find((perro) => perro.id === Number(id));
        
            if (perroEncontrado) {
                const dogImage = {
                    id: perroEncontrado.id,
                    imagen: perroEncontrado.image.url,
                    nombre: perroEncontrado.name,
                    altura: perroEncontrado.height?.metric,
                    peso: perroEncontrado.weight?.metric,
                    vida: perroEncontrado.life_span,
                    temperamento: perroEncontrado.temperament
                };
                res.status(200).json(dogImage);
            } else {
                const foundDog = await Dog.findByPk(id);
                if (foundDog) {
                    const dogFromDatabase = {
                        id: foundDog.id,
                        nombre: foundDog.nombre,
                        altura: `${foundDog.altMin}-${foundDog.altMax} `,
                        peso: `${foundDog.pesMin}-${foundDog.pesMax} `,
                        vida: foundDog.vida,
                        temperamento: foundDog.temperaments
                    };
                    res.status(200).json(dogFromDatabase);
                }
            }
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const dogByName = async (req, res) => {
    try {
        let { name } = req.query;
        const nameQuery = name.toLowerCase().replace(/\s/g, '');

        // Obtener perros de la base de datos
        const perroDb = await getDogName(nameQuery);

        // Obtener perros de la API
        const { data } = await axios(`${URL}?api_key=${API_KEY}`);
        const matches = data.filter((perro) => {
            const perroName = perro.name.toLowerCase().replace(/\s/g, ''); 
            return perroName.includes(nameQuery);
        });

        // Transformar resultados de la API
        const dogsFromApi = matches.map((perro) => {
            return {
                key: perro.id,
                id: perro.id,
                imagen: perro.image.url,
                nombre: perro.name,
                altura: perro.height?.metric,
                peso: perro.weight?.metric,
                vida: perro.life_span,
                temperamento: perro.temperament
            };
        });

        // Si hay resultados de la base de datos, agrégales una bandera para distinguirlos
        let dogsFromDb = [];
        if (perroDb) {
            const dogData = {
                nombre: perroDb.nombre,
                id: perroDb.id,
                altura: perroDb.altMin,
                peso: perroDb.altMax,
                vida: perroDb.vida,
                temperamento: perroDb.temperaments.map((temperament) => temperament.name).join(", "),
                fromDb: true // Agregamos una bandera para distinguir los perros de la base de datos
            };
            dogsFromDb.push(dogData);
        }

        // Combinar resultados y enviar la respuesta
        const combinedDogs = dogsFromDb.concat(dogsFromApi);

        res.status(200).json(combinedDogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDogName = async(nombre)=>{
    const perro = await Dog.findOne({where:{nombre: nombre}, include: Temperament})
    return perro
};

const postDogs = async (req, res) => {
    try {
        const { nombre, altMin, altMax, pesMin, pesMax, vida, temperaments } = req.body;

        if (nombre && altMin && altMax && pesMin && pesMax && vida) {
            const newDog = await Dog.create({ nombre, altMin, altMax, pesMin, pesMax, vida });

            const temper = await Temperament.findAll({ where: { name: temperaments } });

            if (temper.length > 0) {
                await newDog.setTemperaments(temper);
            }

            await newDog.reload({ include: Temperament });
            res.status(200).json(newDog);
        } else {
            res.status(404).json({ error: "Falta info" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports={
    getDogs,
    dogById,
    postDogs,
    dogByName
};
