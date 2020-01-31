const express = require("express"); 
const burger = require("../models/burger.js"); 
const path = require("path"); 

const router = express.Router(); 

router.get("/", async function(req, res){
    let results = await burger.all(); 
    res.render("index", {burgers: results});  
}); 

//Need to make this work
router.put("/api/burgers/:id", async function(req, res){
    console.log("routed to put"); 
    const id= req.params.id; 
    const eatenStatus= req.body.eaten; 
    const results = await burger.changeToEaten(eatenStatus, id); 
    if (results.changedRows === 1){
        res.status(200).end(); 
    }
    
}); 

router.post("/api/burgers", async function(req, res){
    console.log("routed to post"); 
   const newBurgerName= req.body.newBurger; 
   const results = await burger.addNewBurger(newBurgerName); 
    console.log(results); 
    if (results.affectedRows !== 0){
        res.status(200).end(); 
    }
})

module.exports = router; 