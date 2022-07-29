var ulTag = $("#ul");
// console.log('hello')
$(document).ready(function(){
    $("#input").keypress(function(e){
        var key = e.key;
        if(key == "Enter"){
            var value = $("#input").val();
            inputTag = "";
            if(value != ""){
    
                var liTag = $("<li></li>");
                liTag.html(`<div>${value}</div><div class = "delete"><i class="material-icons">delete</i></div>`);
                $("ul").append(liTag);
                $("ul").children("p").hide();
                $(this).val("");
            }
        }
    });    
    $("ul").on("click", ".delete", function () {
        $(this).parent("li").fadeOut(200);
      });

});
