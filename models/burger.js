const orm = require("../config/orm.js"); 

const burger = {

    all: function(cb){
        orm.all("burgers", cb); 
    },

    changeToEaten: function(eatenStatus, burgerId, cb){
        orm.updateValue("burgers", "eaten", eatenStatus, "id", burgerId, cb); 
    },

    addNewBurger: function(newBurgerName, cb){
        orm.addNewValue("burgers", "name", newBurgerName, cb); 
    },

    deleteBurger: function(burgerId, cb){
        orm.deleteTableRow("burgers", "id", burgerId, cb); 
    }
}

module.exports = burger; 