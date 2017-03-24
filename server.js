'use strict';

const express = require('express');
const PORT = 4000;

const app = express();


app.use(express.static('./public'));

app.listen(PORT, function () {
  console.log(`Your app is being served on localhost: ${PORT}`);
})
