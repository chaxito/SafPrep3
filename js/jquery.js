$(document).ready(function(){
    $("img#design").mouseover(function(event){
        $("body").removeClass();
        alert("Design")   
        event.preventDefault();
    });

    // input form values
    $("#form").submit(function(){
        var inputName = $("input#name").val();
        var inputEmail = $("input#email").val();
        var inputMessage = $("textarea#message").val();

        // $(".name").text(inputName);
        $(".email").text(inputEmail);
        $(".message").text(inputMessage);

        $("input#submit").click(function(event){
            alert('${inputName} we have received your message. Thank you for reaching out to us.');
            event.preventDefault();
        });

        
    })
    
});