const express = require('express');
const router = express.Router();

const Movies = require('../models/movies');

//index route
router.get('/', (req,res) => {
	res.render('index.ejs', {
		movies: Movies
	})
})
//post route
router.post('/', (req, res) => {
	Movies.push(req.body)
	res.redirect('/movies')
});

//delete route
router.delete('/:index', (req,res) => {
	Movies.splice(req.params.index,1);
	res.redirect('/movies');
})

//edit route
router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		movie: Movies[req.params.id],
		id: req.params.id
	});
});
//put route
router.put('/:id', (req, res) => {
		Movies[req.params.id] = req.body;
		res.redirect('/movies')
})

module.exports = router;