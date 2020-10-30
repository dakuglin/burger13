
var connection = require("./connection");
// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// * Export the ORM object in `module.exports`.

// var ORM { //object-relational mapping

//    selectAll: function() {

//    }
// };
//ORM will house all of our selections and insert queries

var ORM = {  //object-relational mapping

    selectAll : function(table, callback) {
        queryDB = "SELECT * FROM burgers"
        connection.query(queryDB, function(err,res) {
          if (err) throw err;
          callback(res)
          
      });
    }

    // insertOne : function() {
    //     return this.connection.query("SELECT * FROM burgers", function(err,res) {
    //         if (err) throw err;
            
    //     });
    //   }

    // updateOne : function() {
    // return this.connection.query("SELECT * FROM burgers", function(err,res) {
    //     if (err) throw err;
        
    //     });
    // }

};

//     selectAll() {

//         return this.connection.query(
//             "SELECT * FROM burgers", function(err,res) {
//             if (err) throw err;
//             return(res);
//         })
//     };

//     // insertOne() {
//     //     //code
//     //     // return this.connection.query(
//     //     //     "INSERT INTO burgers "
//     //     // )

//     //     connection.query(
//     //         "INSERT INTO burgers (", function(err,res) {
//     //         if (err) throw err;
//     //         return(res);
//     //     })
//     // }

//     // updateOne() {
//     //     //code
//     // }
// };

// module.exports = new ORM(connection);


module.exports = ORM