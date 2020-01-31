$(function(){
    $(".change-eaten").on("click", function (event) {
        event.preventDefault(); 
        console.log("Clicked update burger"); 
        const burgerId= $(this).data("id"); 
        const neweaten = $(this).data("neweaten"); 
        console.log(neweaten); 
        const newEatenState = {
            eaten: neweaten
        }; 

        $.ajax ("/api/burgers/"+burgerId, {
            type: "PUT",
            data: newEatenState
        }).then(
            function(){
                console.log(`updated burger ${burgerId} to eaten`);
                location.reload();  
            }
        )
    }); 

    $(".newBurger").on("click", function(event){
        event.preventDefault(); 
        console.log("Clicked new burger"); 
        const newBurger= $("#newBurger").val().trim(); 
        const newBurgerObj = {newBurger: newBurger}; 
        $.ajax ("/api/burgers", {
            type: "POST",
            data: newBurgerObj
        }).then(
            function(){
                console.log(`added ${newBurger} to the database`); 
                location.reload(); 
            }
        )
    })
})
