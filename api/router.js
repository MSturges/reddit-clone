const express = require('express');
const router = express.Router();


router.get('/hi', (req,res,next) => {

  res.send({message: 'hello there'});

})

module.exports = router;
