const express = require('express');
const router = express.Router();
const data = require('../data.js');



router.get('/robots/working', function(request, response){
    response.render('employed', data);
    console.log('employed is working')
});



module.exports = router;