const {Dog, Temperament} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const URL = "https://api.thedogapi.com/v1/breeds"

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
                const foundDog = await Dog.findByPk(id, {
                    include: Temperament,
                  });
                if (foundDog) {
                    const dogFromDatabase = {
                        id: foundDog.id,
                        nombre: foundDog.nombre,
                        altura: `${foundDog.altMin}-${foundDog.altMax} `,
                        peso: `${foundDog.pesMin}-${foundDog.pesMax} `,
                        vida: foundDog.vida,
                        temperamento: foundDog.temperaments.map((temperament) => temperament.name).join(", ")
                    };
                    res.status(200).json(dogFromDatabase);
                }
            }
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = dogById;