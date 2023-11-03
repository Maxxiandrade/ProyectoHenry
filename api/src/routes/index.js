const { Router } = require('express');
const dogByName  = require('../controllers/dogByName');
const getTemperament = require('../controllers/getTemperament')
const getDogs = require('../controllers/getDogs')
const dogById = require('../controllers/getDogById')
const postDogs = require('../controllers/postDogs')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Rutas GET
router.get('/dogs/name', dogByName)
router.get('/temperaments', getTemperament)
router.get('/dogs', getDogs)
router.get('/dogs/:id',dogById)

//Rutas POST
router.post('/dogs', postDogs)

module.exports = router;
