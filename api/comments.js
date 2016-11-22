require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.post('/submitComment', function(req, res, next){
  knex('comments')
  .where({ id: req.body.comment_id })
  .first()
  .insert({
    comment_id: req.body.comment_id,
    creator_id: req.body.user_id,
    creator_name: req.body.user_name,
    comment: req.body.comment
  })
  .then(function(review){
    res.status(200).json({success: 'Success'});
  })
  .catch(function(err){
    res.status(500).json(err);
  })
})

router.post('/getVideoComments', function(req,res,next) {
  knex('videos')
  .innerJoin('comments', 'videos.id', 'comments.comment_id')
  .where({ comment_id: req.body.id })
  .then(function(joinedArr) {
    if (joinedArr.length > 0) {
      knex('users')
      .then(function(users) {
        var enhancedReviews = joinedArr.reduce(function(finalArr, currReview) {
          users.forEach(function(currUser) {
            if(currReview.creator_id === currUser.id){
              finalArr.push({
                username: currUser.userName,
                review: currReview.comment,
                id: currReview.id
              })
            }
          })
          return finalArr;
        }, []);
        res.status(200).json({
          reviews: enhancedReviews,
        })
      })

    } else {
      res.status(200).json({
        message: 'No reviews have been submitted for this climb yet!'
      })
    }
  })
})



module.exports = router
