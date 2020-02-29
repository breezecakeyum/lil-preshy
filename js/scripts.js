const el = document.querySelector("button");

el.addEventListener("mouseover", makeTeal);
el.addEventListener("mouseout", makeWhite);

function makeTeal() {
    el.style.color = "teal";
  }
  
function makeWhite() {
    el.style.color = "makeWhite";
  }

  $(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});