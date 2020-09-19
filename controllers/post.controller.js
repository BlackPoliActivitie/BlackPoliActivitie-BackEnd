/**
 * TASK:
 * IMPLEMENT THE CONTROLLER 
 */
const dbManager = require('../database.config/database.manager');

/** 
 * Creation of a post
 * @param {*} postObject JSON Object with Post info
 */

 async function createPost(req, res){

     //CHECK IF THE REQUEST BODY IS EMPTY
     if(!req.body){
         res.status(400).send({
             message: "Request body is empty"
         });
         return;
     }

     //CREATING THE OBJECT TO PERSIST 
     const newPostObject={
         message: req.body.message,
         published_date: req.body.published_date
     }

     //
     dbManager.Post.create(newPostObject).then(
         data => {
             res.send(data);
         }
     ).catch(
         e => {
             console.log(e);
             res.status(500).send({
                 messsage: "Some error ocurred"
             });
         }
     );
}

exports.createPost = createPost;

