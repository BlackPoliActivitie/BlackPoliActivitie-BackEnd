/**
 * Database Configuration Object
 */

//Heroku mysql://bb9f2e92f04f43:4fbb7189@us-cdbr-east-02.cleardb.com/heroku_298428e67c2ec80?reconnect=true
 const dbconfig = {
        HOST: "us-cdbr-east-02.cleardb.com",
        USER: "bb9f2e92f04f43",
        PASSWORD: "4fbb7189",
        DB: "heroku_298428e67c2ec80", 
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
};
module.exports = dbconfig;
