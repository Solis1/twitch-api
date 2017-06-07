$(document).ready(function(){
    
    $(document).on("click", "button.accordion", function(){
        
        var bro = $(this).siblings("div.panel");
        
        if(bro.css("max-height") == "0px"){
            bro.css("max-height", "500px");
        }else{
            bro.css("max-height", "0px");
        }
        
    });
    
});

