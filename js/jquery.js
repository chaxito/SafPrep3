$(document).ready(function () {
    $("img#design").click(function (event) {
        $("body").removeClass();
        $("img#design").addClass("text");
        event.preventDefault();
    });

    // input form values
    $("form").submit(function (event) {
        var inputName = $("input#name").val();
        var inputEmail = $("input#email").val();
        var inputMessage = $("input#message").val();
        $(".name").text(inputName);
        $(".email").text(inputEmail);
        $(".message").text(inputMessage);
        // Output form
        alert("We have received your message. Thank you for reaching out to us.");
        event.preventDefault();
    });


})
    
});