const express = require('express');
const mustacheExpress = require('mustache-express');
const application = express();
const data = require('./data.js');

application.engine('mustache', mustacheExpress());

application.set('views', './views');
application.set('view engine', 'mustache');


application.use('/assets', express.static('./assets'));

application.get('/robots/:userId', (request, response) => {
    var userId = request.params.userId;
    var robot = data.users.find(user => { return user.id === parseInt(userId)})
    response.render('robots', robot );
    console.log('get is working');
});

application.get('/', function(request, response){
    response.render('index', data);
});

application.listen(3000, 'localhost');
console.log('hello')