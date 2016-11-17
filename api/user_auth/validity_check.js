require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var jwt = require('jsonwebtoken');


function validityCheck(req, res, next) {
  try {
    var decoded = jwt.verify(req.body.token, process.env.SECRET);
    if (decoded.id === JSON.parse(req.body.userName).id) {
      knex('users')
      .where({
        id: decoded.id
      })
      .then(function(user){
        if (user.length > 0) {
          res.status(200).json({ success: decoded });
        } else {
          throw Error('Token doesn\'t match user');
        }
      })
    } else {
      throw Error('Token doesn\'t match user');
    }
  }
  catch(err) {
    res.status(200).json({ error: err.message });
  }
});

module.exports = router
