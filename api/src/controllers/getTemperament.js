const axios = require('axios')
const URL = "https://api.thedogapi.com/v1/breeds"
const {Temperament} = require('../db')

async function getTemperament(req,res){
    try {
        const isEmpty = await Temperament.count() === 0

        if(isEmpty){
            const response = await axios(URL)
            const data = response.data

            const dogTemp = data.map(temp=> temp.temperament)

            //dividing temps and eliminating duplicated
            const uniqueTemp = [...new Set(dogTemp.join(', ').split(', '))]

            await saveTempAtDb(Object.values(uniqueTemp))
        }

        const tempFromDb = await Temperament.findAll() //in case its missing: {attributes:['name']}
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

module.exports = getTemperament