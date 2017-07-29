const express = require('express');
const mustacheExpress = require('mustache-express');
const application = express();
const data = require('./data.js');
const router = express.Router();

const robots = require('./controllers/robots-controller');
const robotSingle = require('./controllers/robot-controller');
const robotWorking = require('./controllers/employed-controller');
const robotHire = require('./controllers/forHire-controller');

application.engine('mustache', mustacheExpress());

application.set('views', './views');
application.set('view engine', 'mustache');

 
 
application.use('/assets', express.static('./assets'));

application.use(robotSingle);
application.use(robotWorking);
application.use(robotHire);
application.use(robots);



application.listen(3000, 'localhost');
console.log('hello');