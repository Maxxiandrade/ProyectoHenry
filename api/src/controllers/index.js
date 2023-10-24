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
              altura: perro.height,
              peso: perro.weight,
              vida: perro.life_span,
              temperamento: perro.temperament
            };
          });



                res.status(200).json(dogs)
    } catch (error) {
            res.status(500).json({error: error.message})
        };
};

const dogById = async(req,res)=>{
    try {
        const {id} = req.query
        
        // if(!Number(id)){
        //     const dog = dogById(id)
        //     res.status(200).json(dog)
        // }
        
        const numberId = Number(id)
        const { data } = await axios(`${URL}?api_key=${API_KEY}`);
        const perroEncontrado = data.filter((perro)=>{return perro.id === numberId})
        const dogImage = perroEncontrado.map((perro) => {
            return {
              id: perro.id,
              imagen: perro.image.url,
              nombre: perro.name,
              altura: perro.height,
              peso: perro.weight,
              vida: perro.life_span,
              temperamento: perro.temperament
            };
          })

        res.status(200).json(dogImage)
    } catch (error) {
       res.status(400).json({error: error.message})
   };
};

const dogByIdDb = async(id)=>{
    const foundDog = await Dog.findByPk(id)
        return foundDog
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
              altura: perro.height,
              peso: perro.weight,
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
        const {nombre, altura, peso, vida, imagen, temperamento} = req.body

        if(!nombre || !altura || !peso || !vida || !imagen){res.status(400).json({error: "Falta info"})}

        const newDog = await Dog.create({nombre, altura, peso, vida, imagen})

        if(temperamento){
          const temper =  await Temperament.findAll({where:{name: temperamento}})
        }
        const temper = await Temperament.findOrCreate({where:{name: temperamento}})

        res.status(200).json({newDog,temper})
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
