const router = require('express').Router();
const User = require('../Models/user');


router.get('/users', (req, res) => {
    User.findAll().then(users => {
        res.json(users);
    })


});

router.get('/', (req, res) => {
    data = {};
    res.render('home', data);
});


module.exports = router;