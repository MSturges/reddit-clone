require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

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
    res.status(400).json({ error: err.message });
  }
};

router.post('/addVideo', function(req, res, next) {

console.log(req.body);

  if (req.body.id && req.body.userName && req.body.title && req.body.embed_url) {

    knex('videos')
    .insert({
      creator_id: req.body.id,
      creator_name: req.body.userName,
      title: req.body.title,
      embed_url: req.body.embed_url,
      rating: 1
    })
    .then(function(){
      res.status(200).json({success: 'Success'});
    })
    .catch(function(err){
      console.log(err);
      res.status(500).json(err);
    })
  } else {
    res.status(400).json({error: "Please fill out video form correctly"});
  }
});

router.get('/getVideos', function(req, res, next){
  knex('videos')
  .then(function(videos){
    res.status(200).json(videos);
  }).catch(function(err){
    res.status(500).json(err);
  });
})

router.get('/video/:id', (req,res,next) => {  
  knex('videos')
  .where({id: req.params.id})
  .first()
  .then((video) => {
    res.status(200).json(video);
  })
  .catch((err) => {
    res.json(err);
  })
})


module.exports = router
