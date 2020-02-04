const express = require("express"); 
const burger = require("../models/burger.js"); 

const router = express.Router(); 

// router.get("/", async function(req, res){
//     let results = await burger.all(); 
//     res.render("index", {burgers: results});  
// }); 

router.get("/", function(req, res){
    let cb = function (results) {res.render("index", {burgers: results})}; 
    burger.all(cb);  
}); 

// router.put("/api/burgers/:id", async function(req, res){
//     const id= req.params.id; 
//     const eatenStatus= req.body.eaten; 
//     const results = await burger.changeToEaten(eatenStatus, id); 
//     if (results.changedRows === 0){
//         return res.status(404).end(); 
//     } else {
//         res.status(200).end(); 
//     }
// }); 

router.put("/api/burgers/:id", async function(req, res){
    const id= req.params.id; 
    const eatenStatus= req.body.eaten; 
    const cb = function (results){
        if (results.changedRows === 0){
            return res.status(404).end(); 
        } else {
            res.status(200).end(); 
        }
    }; 
    burger.changeToEaten(eatenStatus, id, cb); 
   
}); 

// router.post("/api/burgers", async function(req, res){
//    const newBurgerName= req.body.newBurger; 
//    const results = await burger.addNewBurger(newBurgerName);
//    console.log(results);  
//     // if (results.affectedRows !== 0){
//         res.status(200).end(); 
//     // }
// }); 

router.post("/api/burgers", async function(req, res){
    const newBurgerName= req.body.newBurger; 
    const cb = function (results){
        if (results.affectedRows !== 0){
            res.status(200).end(); 
        }
    }; 
    burger.addNewBurger(newBurgerName, cb); 
     
 }); 

// router.delete("/api/burgers/:id", async function(req, res){
//     const burgerId= req.params.id; 
//     const results = await burger.deleteBurger(burgerId); 
//     if (results){
//         res.status(200).end(); 
//     } else {
//         return res.status(404).end(); 
//     }
// }); 

router.delete("/api/burgers/:id", async function(req, res){
    const burgerId= req.params.id;
    const cb = function(results) {
        if (results.affectedRows !== 0){
            res.status(200).end(); 
        } else {
            return res.status(404).end(); 
        }
    } ; 
    burger.deleteBurger(burgerId, cb); 
   
}); 

module.exports = router; 