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

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("frontend"));

app.get('/', (req, res) => {
  res.send('Hello world, from express');
});

app.get('/content', async (req, res) => {
  const posts = await contentModel.find({});
  try {
    res.send(posts);
    console.log("Sent");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/content', async (req, res) => {
  console.log(req.body);
  const post = new contentModel(req.body);

  try {
    await post.save();
    res.send(post);
    console.log("Created");
  } catch (err) {
    res.status(500).send(err);
  }

});

app.delete('/content/:id', async (req, res) => {
  try {
    const post = await contentModel.findByIdAndDelete(req.params.id);

    if (!post) rest.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => console.log('Foobar'));
