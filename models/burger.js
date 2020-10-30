var orm = require("../config/orm");


// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.
var burger = {
    selectAll: (callback) =>  {
        orm.selectAll("burgers", (result)=>{
            callback(result)
            console.log(result)
        });
    }
}

console.log(burger)





module.exports = burger;
