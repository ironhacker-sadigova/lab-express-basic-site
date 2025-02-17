// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});


app.get('/shark', (request, response, next) => {
    response.sendFile(__dirname + '/views/shark.html');
  });

  app.get('/fox', (request, response, next) => {
    response.sendFile(__dirname + '/views/fox.html');
  });

  app.get('/chick', (request, response, next) => {
    response.sendFile(__dirname + '/views/chick.html');
  });