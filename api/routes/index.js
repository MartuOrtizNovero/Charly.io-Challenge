const getCompanies = require('../controllers/getCompanies.js') ;
const { Router } = require('express') ;
const router = Router()


router.get('/', getCompanies)

module.exports= router;