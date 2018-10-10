const express = require('express');
const router = express.Router();

const Movies = require('../models/movies');

//index route
router.get('/', (req,res) => {
	res.send(Movies)
})

module.exports = router;