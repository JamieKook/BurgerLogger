$(function(){
    $(".change-eaten").on("click", function (event) {
        event.preventDefault(); 
        const burgerId= $(this).data("id"); 
        const neweaten = $(this).data("neweaten"); 
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
    }); 

    $(".delete-burger").on("click", function(event){
        const burgerId = $(this).data("id"); 
        $.ajax("/api/burgers/"+burgerId, {
            type: "DELETE"
        }).then(
            function(){
                console.log(`deleted burger id: ${burgerId} from the database`); 
                location.reload(); 
            }
        )
    })
})
