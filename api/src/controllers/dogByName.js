const {Dog, Temperament} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const URL = "https://api.thedogapi.com/v1/breeds";


const dogByName = async (req, res) => {
    try {
        let { name } = req.query;
        const nameQuery = name.toLowerCase().replace(/\s/g, '');

        const perroDb = await getDogName(nameQuery);

        const { data } = await axios(`${URL}?api_key=${API_KEY}`);
        const matches = data.filter((perro) => {
            const perroName = perro.name.toLowerCase().replace(/\s/g, ''); 
            return perroName.includes(nameQuery);
        });

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

        
        let dogsFromDb = [];
        if (perroDb) {
            const dogData = {
                nombre: perroDb.nombre,
                id: perroDb.id,
                altura: perroDb.altMin,
                peso: perroDb.altMax,
                vida: perroDb.vida,
                temperamento: perroDb.temperaments.map((temperament) => temperament.name).join(", "),
                fromDb: true 
            };
            dogsFromDb.push(dogData);
        }

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


module.exports = dogByName;

