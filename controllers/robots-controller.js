const express = require('express');
const router = express.Router();
const data = require('../data.js');


router.get('/robots/:userId', (request, response) => {
    var userId = request.params.userId;
    var robot = data.users.find(user => { return user.id === parseInt(userId)})
    response.render('robots', robot );
    console.log('get is working');
});

module.exports = router;