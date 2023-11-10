const axios = require('axios');
const URL = "https://api.thedogapi.com/v1/breeds";
const {Temperament} = require('../db');

async function getTemperament(req,res){
    try {
        const isEmpty = await Temperament.count() === 0

        if(isEmpty){
            const {data} = await axios(URL)

            const dogTemp = data.map(temp=> temp.temperament)

            const filteredTemp = dogTemp.filter(temp => temp !== "");

            const uniqueTemp = [...new Set(filteredTemp.join(", ").split(", ").sort().filter(Boolean))];
            

            await saveTempAtDb(uniqueTemp)
        }

        const tempFromDb = await Temperament.findAll() 
        const tempDbArray = []

        tempFromDb.forEach(temp=>{
            tempDbArray.push(temp.name)
        })

        res.status(200).json(tempDbArray)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function saveTempAtDb(temps){
    try {
        for(const temp of temps){
            
            await Temperament.create({name: temp})
        }
        console.log("temperaments stored in database")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getTemperament;