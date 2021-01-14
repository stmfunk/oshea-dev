const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const contentModel = require('./models/content.model.js');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/oshea-dev', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
  console.log('connected');
  // 
});

let content = [{id:1, title:'Foobar', body:'Fishpope'}];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("frontend"));

app.get('/', (req, res) => {
  res.send('Hello world, from express');
});

app.get('/content', (req, res) => {
  res.json(content);
});

app.post('/content', (req, res) => {
      const post = req.body;
      console.log(post);
      content.push(post);

      res.send('Book is added to the database');

});

app.listen(port, () => console.log('Foobar'));
