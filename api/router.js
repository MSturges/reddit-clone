const express = require('express');
const router = express.Router();
const knex = require("../db/knex.js");


router.get('/hi', (req,res,next) => {

  res.send({message: 'hello there'});

})

module.exports = router;
