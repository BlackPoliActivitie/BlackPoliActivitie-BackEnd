const dbManager = require ('../database.config/database.manager');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
async function createUser (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        username: req.body.username,
        creation_date: req.body.creation_date
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.create(newUserObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

/**
 * GEt all users
 */
async function findAllUsers (req, res){
    try {
        //Execute query
        const users = await dbManager.User.findAll ();
        
        //Send response
        res.json({
                data: users
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
 * Get user by id
 */
async function findOneUser (req, res){
    try {
        const { idUser } = req.params;

        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                idUser: idUser
            }
        });
        //Send response
        res.json(user);

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
 * Update user
 */
async function updateUser (req, res){
                /**
                 * TASK:
                 * IMPLEMENT THE FUNCTION______________________- 
                 */
                try {
                    const { idUser } = req.params;
                    //Execute query
                    const user = await dbManager.User.update(
                        {username: req.body.username} ,{
                        where: {
                            idUser: idUser,
                         
                        }
                    });    
                    
                         
                                       
                    //Send response
                    res.send('user update with username: ' + req.body.username);
            
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
 * Delete an existen user by username
 * @param {*} req 
 * @param {*} res 
 */
async function deleteUserByUsername (req, res){ 
                /**
                 * TASK:
                 * IMPLEMENT THE FUNCTION______________________- 
                 */

                try {
                    const { username } = req.params;
                    //Execute query
                    const user = await dbManager.User.destroy({
                        where: {
                            username: username
                        }
                    });                    
                    //Send response
                    res.send('user delete with username: ' + username);
            
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
async function deleteAllUsers (req, res){
                /**
                 * TASK:
                 * IMPLEMENT THE FUNCTION______________________- 
                 */
                try {
                    //Execute query
                    const user = await dbManager.User.destroy({
                        where: {}
                    });                    
                    //Send response
                    res.send('user dates eliminated');
            
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
function findAllUsersByCreatedDate (req, res){
                /**
                 * TASK:
                 * IMPLEMENT THE FUNCTION______________________- 
                 */
}


exports.createUser = createUser; 
exports.findAllUsers = findAllUsers; 
exports.findOneUser = findOneUser; 
exports.updateUser = updateUser;
exports.deleteUserByUsername = deleteUserByUsername;
exports.deleteAllUsers = deleteAllUsers;
exports.findAllUsersByCreatedDate = findAllUsersByCreatedDate;