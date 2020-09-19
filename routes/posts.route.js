/**
 * TASK:
 * IMPLEMENT THE CONTROLLER 
 */
var express = require('express');
var router = express.Router();
const postController = require('../controllers/post.controller')

/**
 * POST Route to create post
 */
router.post ('/', postController.createPost);


module.exports = router;
  