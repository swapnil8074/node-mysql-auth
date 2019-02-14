// const mysql = require("mysql2");

// // way one... we open the connection ... make query. and we should always close the connection after getting done with query
// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     database: "nodemysql",
//     password: ""
// });


// // pool promise will allow to use promise instead of callbacks
// module.exports = pool.promise();





// using Sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodemysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});


module.exports = sequelize;