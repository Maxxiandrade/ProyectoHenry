const { where, Op } = require('sequelize');
const {Dog, Temperament} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const URL = "https://api.thedogapi.com/v1/breeds/"


const getDogs = async (req, res)=>{
    try {
        const {data} = await axios(`${URL}`)
        
        const dog = data.map((perro)=> {return {
             imagen: perro.reference_image_id,
             nombre:perro.name, 
             altura: perro.height, 
             peso:perro.weight, 
             vida: perro.lifespan }})
            res.status(200).json(dog)
    } catch (error) {
            res.status(500).json({error: error.message})
        };
};

const dogByRaza = async(req,res)=>{
    try {
        const {id} = req.params
        const {data} = await axios(`${URL}${id}`)

       const perroEncontrado = Temperament.findAll({where:{id: id}})
       
       if(perroEncontrado) return res.status(200).json(data)

       res.status(200).json(data)
    } catch (error) {
       res.status(400).json({error: error.message})
   };
};

const dogByName = async(req,res)=>{
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({ error: "Falta el parámetro 'name' en la consulta" });
        }

        const dogs = await Dog.findAll({
            where: {
                nombre: {
                    [Op.iLike]: `%${name}%` // Utilizamos Op.iLike para hacer una búsqueda case-insensitive
                }
            }
        });

        res.status(200).json(dogs);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const postDogs = async(req,res)=>{
    try {
        const {nombre, altura, peso, vida, imagen, temperamento} = req.body

        if(!nombre || !altura || !peso || !vida || !imagen || !temperamento){res.status(400).json({error: "Falta info"})}

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
    dogByRaza,
    postDogs,
    dogByName
};
