const { Router } = require('express');
const { getDogs,  dogByRaza, postDogs, dogByName } = require('../controllers');
const getTemperament = require('../controllers/getTemperament')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Rutas GET
router.get('/temperaments', getTemperament)
router.get('/dogs', getDogs)
router.get('/dogs/:id',dogByRaza)
router.get('/dogs/name', dogByName)

//Rutas POST
router.post('/dogs', postDogs)

module.exports = router;
