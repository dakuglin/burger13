//need to wait to attach or handlebars until the DOM is fully loaded

$(function() {
    
    //create burger on click event
    $("#addburgerBtn").on("click", function(e) {
        
        //e.preventDefault() for submit event
        e.preventDefault();

        //creates new burger
        var newBurger = {
            burger_name: $("#addburger").val().trim(),
            devoured: 0,
        };
        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Successfully added a new burger!");
                //reload page to get updated list
                location.reload();
            }
        );
    });

    //devour burger on click event
    $(".change-devour").on("click", function() {
        var id = $(this).data("id");
        var devourValue = 1; //click event to set devour to true

        var newDevourValue = {
            devoured : devourValue
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourValue
        }).then(
            function() {
            console.log("Burger was devoured!");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

});

