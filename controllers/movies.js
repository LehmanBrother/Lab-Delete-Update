const express = require('express');
const router = express.Router();

const Movies = require('../models/movies');

//index route
router.get('/', (req,res) => {
	res.render('index.ejs', {
		movies: Movies
	})
})

//delete route
router.delete('/:index', (req,res) => {
	Movies.splice(req.params.index,1);
	res.redirect('/movies');
})

module.exports = router;