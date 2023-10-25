const { where, Op } = require('sequelize');
const {Dog, Temperament} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const URL = "https://api.thedogapi.com/v1/breeds"



const getDogs = async (req, res)=>{
    try {

        const {data} = await axios(`${URL}?api_key=${API_KEY}`)
       
        const dogs = data.map((perro) => {

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



                res.status(200).json(dogs)
    } catch (error) {
            res.status(500).json({error: error.message})
        };
};

const dogById = async (req, res) => {
    try {
        const { id } = req.params;
        const numberId = Number(id);
        const { data } = await axios(`${URL}?api_key=${API_KEY}`);
        const perroEncontrado = data.find((perro) => perro.id === numberId);

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
            res.status(200).json(foundDog);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const dogByName = async (req, res) => {
    try {
        let { name } = req.query;

        name = name.toLowerCase().replace(/\s/g, '');

        const { data } = await axios(`${URL}?api_key=${API_KEY}`);

        const matches = data.filter((perro) => {
            const perroName = perro.name.toLowerCase().replace(/\s/g, ''); 
            return perroName.includes(name);
        });
        const dogs = matches.map((perro) => {
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

        if (!name) {
            return res.status(400).json({ error: "Falta el parámetro 'name' en la consulta" });
        }

        res.status(200).json(dogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDogName = async(nombre)=>{
    const perro = await Dog.findOne({where:{nombre: nombre}})
    return perro
};

const postDogs = async(req,res)=>{
    try {
        const {nombre, altMin, altMax, pesMin, pesMax, vida, temperamento} = req.body

        if(nombre && altMin && altMax && pesMin && pesMax && vida ){     
            const newDog = await Dog.create({nombre, altMin, altMax, pesMin, pesMax, vida})      
            const perros = Dog.findAll()
                const temper = await setTemperament.findOrCreate({where:{name: temperamento}})
            res.status(200).json("Perro creado con éxito")
        }else{res.status(404).json({error: "Falta info"})}
    } catch (error) {
        res.status(500).json({error: error.message})
    };
};


module.exports={
    getDogs,
    dogById,
    postDogs,
    dogByName
};
