'use strict';

const express = require('express');
<<<<<<< HEAD

const PORT = process.env.PORT || 3000;

=======
const PORT = 4000;
>>>>>>> ac66520aa69f5e657da93d3a755e477f7d886e82
const app = express();
const requestProxy = require('express-request-proxy');
app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.use(function(request, response, next){
  response.status(404).sendFile('404.html', {root: './public'});

});

app.listen(PORT, function () {
  console.log(`Your app is being served on localhost: ${PORT}`);
});
