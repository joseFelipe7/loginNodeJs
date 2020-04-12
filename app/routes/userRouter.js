const express = require('express');
let route = express.Router();

route.get('/cadastro',(req, res)=>{
    res.render('registerUser');
});

module.exports = route;