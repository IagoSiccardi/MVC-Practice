const express = require ('express')
const router = express.Router();

const {about,home} = require ('../controllers/mainController')

router.get('/', home)
router.get('/about', about)

module.exports = router