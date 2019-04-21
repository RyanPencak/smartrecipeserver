const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

// Set Database URL
const dburl = "mongodb://rpencak:nbBAKu33fYHnTApw@smartrecipes-shard-00-00-nigdu.mongodb.net:27017,smartrecipes-shard-00-01-nigdu.mongodb.net:27017,smartrecipes-shard-00-02-nigdu.mongodb.net:27017/test?ssl=true&replicaSet=smartrecipes-shard-0&authSource=admin&retryWrites=true";

// Connect to MongoDB with Mongoose
mongoose.connect(dburl, { useNewUrlParser: true }, function (err, db) {
  if (err) {
    console.log('Unable to connect to mongoDB', err);
  }
  else {
    console.log('Connection established to ', dburl);
  }
});

// Initialize http server
const app = express();

app.use(bodyParser.json());

// Handle / route
app.get('/', (req, res) =>
  res.send('Welcome to the SmartRecipe Server.')
)

// Set Routes
app.use('/api', require('./routes/recipeRoutes'));

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
