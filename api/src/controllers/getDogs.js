const {Dog, Temperament} = require ('../db');
const axios = require ('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const URL = "https://api.thedogapi.com/v1/breeds";

const getDogs = async (req, res)=>{
    try {
        const dbDogs = await Dog.findAll({
            include: Temperament,                   // Traigo a todos los perros y le pido que me incluya la tabla de Temperament
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
          console.log(dbDogs);
          const dogs = dbDogs.map((dbDog) => ({
            nombre: dbDog.nombre,
            id: dbDog.id,
            altura: `${dbDog.altMin} - ${dbDog.altMax} `,
            peso: `${dbDog.pesMin} - ${dbDog.pesMax} `,
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

module.exports = getDogs;