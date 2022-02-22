const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

listFavoriteGames = [];

app.post('/api/games', (req, res) => {
  try {
    if (!req.body.name || !req.body.platform) {
      throw new Error('Campos inválidos');
    }

    listFavoriteGames.push(req.body);

    res.send(JSON.stringify(req.body));
  } catch (error) {
    res.send(JSON.stringify({ message: error.message }));
  }
});

app.get('/api/games', (req, res) => {
  res.send(JSON.stringify(listFavoriteGames));
})

app.listen(3000, () => console.log('Api is Running'));