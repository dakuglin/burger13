//need to wait to attach or handlebars until the DOM is fully loaded

$(function() {
    $(".change-devoured").on("click", function(e) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newburger");

        var newDevourState = {
            devoured : newDevour
        },
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
            console.log("changed devoured to", newDevour);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });


    $(".create-form").on("submit", function(e) {
        e.preDefault();

        var newBurger = {
            burger_name: $("#addburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Successfully created a new burger!");
                //reload page to get updated list
                location.reload();
            }
        );
    });
});