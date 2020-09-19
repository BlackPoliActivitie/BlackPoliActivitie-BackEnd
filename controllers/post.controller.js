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

/**
 * Get post by user id
 */
async function findAllPostsByUser (req, res){
    try {
        const { idUser } = req.params;

        //Execute query
        const post = await dbManager.Post.findAll({
            where: {
                idUser: idUser
            }
        });
        //Send response
        res.json(post);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

async function findAllPostsByPublishedDate (req, res){
    /**
     * TASK:
     * IMPLEMENT THE FUNCTION______________________- 
     */
    try {
       
       const { published_date } = req.params;
       
       //Execute query
        const posts = await dbManager.Post.findAll ({
            where: {
                published_date: published_date
            }
        });
        
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

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function deleteAllPosts (req, res){
    /**
     * TASK:
     * IMPLEMENT THE FUNCTION______________________- 
     */
    try {
        //Execute query
        const post = await dbManager.Post.destroy({
            where: {}
        });                    
        //Send response
        res.send('posts eliminated');

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }


}

async function deletePostByUserid (req, res){ 
    /**
     * TASK:
     * IMPLEMENT THE FUNCTION______________________- 
     */

    try {
        const { idUser } = req.params;
        //Execute query
        const post = await dbManager.Post.destroy({
            where: {
                idUser: idUser
            }
        });                    
        //Send response
        res.send('post delete with id user: ' + idUser);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }

}

async function deletePostByPublishedDate (req, res){ 
    /**
     * TASK:
     * IMPLEMENT THE FUNCTION______________________- 
     */

    try {
        const { published_date } = req.params;
        //Execute query
        const post = await dbManager.Post.destroy({
            where: {
                published_date: published_date
            }
        });                    
        //Send response
        res.send('post delete with published date: ' + published_date);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }

}

async function deletePostByPostid (req, res){ 
    /**
     * TASK:
     * IMPLEMENT THE FUNCTION______________________- 
     */

    try {
        const { idPost } = req.params;
        //Execute query
        const post = await dbManager.Post.destroy({
            where: {
                idPost: idPost
            }
        });                    
        //Send response
        res.send('post delete with id: ' + idPost);

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
exports.findAllPostsByUser = findAllPostsByUser;
exports.findAllPostsByPublishedDate = findAllPostsByPublishedDate;
exports.deleteAllPosts = deleteAllPosts;
exports.deletePostByUserid = deletePostByUserid;
exports.deletePostByPublishedDate = deletePostByPublishedDate;
exports.deletePostByPostid = deletePostByPostid;



