$(document).ready(function(){
    $("img#design").click(function(event){
        $("body").removeClass();
        $("img#design").addClass("text");   
        event.preventDefault();
    });

    // input form values
    $("form").submit(function(event){
        var inputName = $("input#name").val();
        var inputEmail = $("input#email").val();
        var inputMessage = $("input#message").val();
        $(".name").text(inputName);
        $(".email").text(inputEmail);
        $(".message").text(inputMessage);

        alert("success");
        event.preventDefault();
      });

        
    })
    
});