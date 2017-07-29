const express = require('express');
const router = express.Router();
const data = require('../data.js');



router.get('/', function(request, response){
    response.render('index', data);
});



module.exports = router;