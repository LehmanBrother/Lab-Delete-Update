const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const moviesController = require('./controllers/movies');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/movies', moviesController);

app.get('/',(req, res) => {
	res.send('This is the server responding to a get request')
})

app.listen(3000, () => {
	console.log('server is listening on port 3000');
})