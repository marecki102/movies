const express = require('express');
const axios = require('axios');

const app = express();

app.get('/movies', async (req, res) => {
  const movies = {};
  res.json(movies);
});

module.exports = app;