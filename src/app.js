const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

// Routes
const postRoute = require('./routes/posts');

app.use('/post', postRoute);

// Middlewares
app.use('/', () => {
  console.log('This is a middleware');
});

// Routes
app.get('/', (req, res) => {
  res.send('We are on home');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('Connected to DB');
});

// Listen
app.set('port', process.env.PORT || 3002);
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});