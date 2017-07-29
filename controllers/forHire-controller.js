const express = require('express');
const router = express.Router();
const data = require('../data.js');



router.get('/robots/unemployed', function(request, response){
    response.render('forHire', data);
    console.log('hire is working')
});



module.exports = router;