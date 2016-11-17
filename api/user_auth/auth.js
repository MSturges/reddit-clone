require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../../db/knex.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


// Middleware to check if user exists
function checkIfUserExist(req, res, next) {
  console.log(req.body);
  if (req.body.reqUserName && req.body.password) {
    knex('users')
    .where({userName: req.body.reqUserName.toLowerCase()})
    .first()
    .then(function(user) {
      if (user.userName == req.body.reqUserName.toLowerCase()) {
        res.status(200).json({error: 'Oops, A user with this username exists already!'});
      } else{
        return next();
      }
    })
    .catch(function(err){
      return next();
    })
  } else {
    res.status(200).json({error: 'Invalid User Name, or Password'});
  }
}

// signup route for users => Middleware check for exisiting user
router.post('/signup', checkIfUserExist, function (req, res, next) {
  if ( req.body.reqUserName && req.body.password ) {
    var hash = bcrypt.hashSync(req.body.password, 8);
    knex('users')
    .insert({
      password: hash,
      userName: req.body.reqUserName.toLowerCase()
    })
    .returning('*')
    .then(function(user){
      var userObj = {id: user[0].id, username: user[0].userName};
      var token = jwt.sign({ id: user[0].id}, process.env.SECRET);
      res.status(200).json({token: token, user: userObj});
    })
    .catch(function(err){
      res.status(200).json(err);
    })
  }
});

// Signin route
router.post('/signin', function(req, res, next) {
  if (req.body.reqUserName  && req.body.password) {
    knex('users')
    .where({userName: req.body.reqUserName})
    .first()
    .then(function(user) {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        var user_obj = {id: user.id, username: user.userName};
        var token = jwt.sign({ id: user.id }, process.env.SECRET);
        res.status(200).json({token: token, user: user_obj});
      } else {
        res.status(200).json({error: 'Invalid User Name, or Password'});
      }
    })
    .catch(function(err) {
      console.log('error in login', err);
    })
  } else {
    res.status(200).json({error: 'Please completely fill out the login form'});
  }
});

module.exports = router
