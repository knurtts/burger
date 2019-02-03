$(document).ready(function() {
    $.ajax("/api/all").then(function(data) {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].devoured === 1) {
                var eaten = '<a id="'+data[i].id+'" class="list-group-item list-group-item-action eaten">'+data[i].burger_name+'</a>'
                $("#eatenList").append(eaten);
            } else if (data[i].devoured === 0) {
                var uneaten = '<a id="'+data[i].id+'" class="list-group-item list-group-item-action uneaten">'+data[i].burger_name+'</a>'
                $("#uneatenList").append(uneaten);
            }
        }
    });

    $(".submit").on("click", function() {
        event.preventDefault();
        var newBurger = $("#burgerInput").val().trim();

        if(newBurger === "") {
            alert("Your Burger must have a name before you submit it.");
        } else {
            var burgerName = {name: newBurger};
            // console.log(burgerName);
            
            $.ajax("/api/new", {
                type: "POST",
                data: burgerName
            }, function() {
                console.log("Tada!");
            });
            location.reload();
        }
    });

    $("body").on("click", "a", function() {
        var eat = {
            id: $(this).attr("id"),
        }
        console.log(eat);
        
        $.ajax("/api/update", {
            type: "POST",
            data: eat
        }).then(function() {
            console.log("Updated");
        });
        location.reload();
    });

});