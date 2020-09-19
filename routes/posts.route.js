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

/**
 * GET Route to list all users
 */
router.get('/', postController.findAllPosts);

/**
 * GET Route to find post by user id
 */
router.get('/:idUser', postController.findOnePost);



module.exports = router;
  