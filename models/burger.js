var orm = require("../config/orm");


// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// var burgerObj = {

//     selectAll : function(callback) {
//         orm.selectAll("burgers", function(result) {
//             console.log(result)
//             callback(result);
//         })
//     },

//     // insertOne : function(callback) {
//     //     orm.insertOne("burgers", function(result) {
//     //         callback(result);
//     //     })
//     // },

//     // updateOne : function(callback) {
//     //     orm.updateOne("burgers", function(result) {
//     //         callback(result);
//     //     })
//     // },
// }

orm.selectAll("burgers", function(result) {
    var data = result;
    console.table(data)
});

orm.insertOne("burgers", "burger_name","Veggie Burger", function(result) {
    var data = result;
    console.log("Successfully added new burger!");
  
});

orm.updateOne("burgers", "burger_name", "Double Veggie Burger", 4, function(result) {
    var data = result;
    //console.table(data)
    console.log("Successfully updated burger!");
  
});
  

module.exports = orm;




// * Export at the end of the `burger.js` file.
// var burger = {
//     selectAll: function(callback) {
//         orm.selectAll("burgers", (result)=>{
//             callback(result)
//             console.log(result)
//         });
//     }
// }
