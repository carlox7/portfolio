'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

app.listen(PORT, function () {
  console.log('Your app is being served on localhost: 4000');
})
