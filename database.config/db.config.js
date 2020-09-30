/**
 * Database Configuration Object
 */

//mysql://b98fd37d15e849:b6f91822@us-cdbr-east-02.cleardb.com/heroku_83b2ef5afb616a5?reconnect=true
 const dbconfig = {
        HOST: "us-cdbr-east-02.cleardb.com",
        USER: "b98fd37d15e849",
        PASSWORD: "b6f91822",
        DB: "heroku_83b2ef5afb616a5", 
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
};
module.exports = dbconfig;
