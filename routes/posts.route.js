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
router.get('/:idUser', postController.findAllPostsByUser);

/**
 * GET Route to find post by published date
 */
router.get ('/findDate/:published_date', postController.findAllPostsByPublishedDate);

/**
 * GET Route to find post by id
 */
router.get('/:idPost', postController.findPostById);

/**
 * DELETE Route to delete all posts
 */
router.delete ('/',postController.deleteAllPosts);

/**
 * DELETE Route to delete posts by user id
 */
router.delete ('/:idUser',postController.deletePostByUserid);

/**
 * DELETE Route to delete posts by published date
 */
router.delete ('/:published_date',postController.deletePostByPublishedDate);

/**
 * DELETE Route to delete posts by post id
 */
router.delete ('/:idPost',postController.deletePostByPostid);


module.exports = router;
  