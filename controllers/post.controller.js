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
         published_date: req.body.published_date,
         idUser: req.body.idUser
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

async function findAllPosts (req, res){
    try {
        //Execute query
        const posts = await dbManager.Post.findAll ();
        
        //Send response
        res.json({
                data: posts
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

exports.createPost = createPost;
exports.findAllPosts = findAllPosts;

