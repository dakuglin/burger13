
var connection = require("./connection");

//ORM (object-relational mapping) will house all of our selections and insert queries

var orm = {

  selectAll : function(tableName, callback) {
      // SELECT * FROM burgers
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, tableName, function(err, result) {
        if (err) throw err;
        callback(result);
    });
  },

  insertOne : function(tableName, colToSearch, valOfCol, callback) {
      // INSERT INTO burgers SET burger_name = <new burger name>
      var queryString = "INSERT INTO ?? SET ?? = ?";
      connection.query(queryString, [tableName, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        callback(result);
    });
  },

  updateOne : function(tableName, colToSearch, valOfCol, idNum, callback) {
      // UPDATE burger SET burger_name = <new burger name> WHERE id = <burger id to update>
      var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
      connection.query(queryString, [tableName, colToSearch,valOfCol, idNum], function(err, result) {
        if (err) throw err;
        callback(result);
    });
  },

};

module.exports = orm;


