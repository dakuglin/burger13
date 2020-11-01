//need to wait to attach or handlebars until the DOM is fully loaded

$(function() {
    
    $(".create-form").on("submit", function(e) {
        e.preDefault();

        //creates new burger
        var newBurger = {
            burger_name: $("#addburger").val().trim(),
            devoured: 0
        };
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

    $(".change-devoured").on("click", function(e) {
        e.preDefault();
        var id = $(this).data("id");
        var devourState = 1;

        var newDevourState = {
            devoured : devourState
        },
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
            console.log("changed devoured to", devourState);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

});