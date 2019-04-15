let mysql = require('mysql');
 
//providing database connecting credentials

let connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database : 'electron_test',
});

//connecting to the database 

connection.connect(function(err){
    if(err){
        return console.error('error:'+ err.message);
    }
    console.log('connected to mysql server');
});

//closing the database connection

// connection.end(function(err){
//     if(err){
//         return console.log('error',+ err.message);
//     }
//     console.log('closed the database connection');
// });

// connection.destroy();

//pooling connection 

var pool = mysql.createPool({
   connectionLimit: 5,
   host: 'localhost', 
   user: 'root',
   password: '',
   database: 'electron_test',
});

//to get a connection from pool

// pool.connection(function(err, connection){
//     //execute query
//     //...
// });

// return to a connection to pool after you are done with it

// pool.getConnection(function(err,connection){
//     //execute query
//     //...
//     connection.release();
// });


// to close all connections in the pool
// pool.end(function(err){
//     if(err){
//         return console.log(err.message);
//     }
//     //close all connections
// });
