var orm = require("../config/orm.js");


// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {

    selectAll : function(cb) {
        orm.selectAll("burgers", function(res) {
            console.log(res)
            cb(res);

           // return res
        })
    },

    //variables cols and vals are arrays
    insertOne : function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
            //return res
        })
    },

    updateOne : function(objColVals, condition, cb) {
        orm.updateOne("burgers",objColVals,condition, function(res) {
            cb(res);
            //return res
        })
    },
}

//export database functions for the controller (burgers_controllers.js)
module.exports = burger;

// orm.selectAll("burgers", function(res) {
//     var data = res;
//     console.table(data)
// });

// orm.insertOne("burgers", "burger_name","Veggie Burger", function(res) {
//     var data = res;
//     console.log("Successfully added new burger!");
  
// });

// orm.updateOne("burgers", "burger_name", "Double Veggie Burger", 4, function(res) {
//     var data = res;
//     //console.table(data)
//     console.log("Successfully updated burger!");
  
// });
  