const orm = require("../config/orm.js"); 

const burger = {
    // all: async function(){
    //     return orm.all("burgers"); 
    // },

    all: function(cb){
        orm.all("burgers", cb); 
    },

    // changeToEaten: async function(eatenStatus, burgerId){
    //     return orm.updateValue("burgers", "eaten", eatenStatus, "id", burgerId); 
    // },

    changeToEaten: function(eatenStatus, burgerId, cb){
        orm.updateValue("burgers", "eaten", eatenStatus, "id", burgerId, cb); 
    },


    // addNewBurger: async function(newBurgerName){
    //     return orm.addNewValue("burgers", "name", newBurgerName); 
    // },

    addNewBurger: function(newBurgerName, cb){
        orm.addNewValue("burgers", "name", newBurgerName, cb); 
    },

    // deleteBurger: async function(burgerId){
    //     await orm.deleteTableRow("burgers", "id", burgerId); 
    //     return true; 
    // }

    deleteBurger: function(burgerId, cb){
        orm.deleteTableRow("burgers", "id", burgerId, cb); 
    }
}

module.exports = burger; 