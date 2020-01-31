const orm = require("../config/orm.js"); 

const burger = {
    all: async function(){
        return orm.all("burgers"); 
    },

    changeToEaten: async function(eatenStatus, burgerId){
        return orm.updateValue("burgers", "eaten", eatenStatus, "id", burgerId); 
    },

    addNewBurger: async function(newBurgerName){
        return orm.addNewValue("burgers", "name", newBurgerName); 
    }
}

module.exports = burger; 