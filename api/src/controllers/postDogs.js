const {Dog, Temperament} = require('../db');

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

module.exports = postDogs;