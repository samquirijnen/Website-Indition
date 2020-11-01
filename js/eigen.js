   
    $(document).ready(function () {
   /* homepagina*/
   
     
    // typed plugin 
  var typed = new Typed(".typed",{
    strings:["Hair", "Make Up","Color And Style"],
    typeSpeed:100,
    loop:true,
    startDelay:1000,
    showCursor:false

  })

  
   /* Wie zij wij pagina*/

   /* hairpagina*/

   /* MakeUppagina*/

   /* ColorAndStylepagina*/
  
    
  
   /* Gallerijpagina*/
   
 
   baguetteBox.run(".gallerij1",{
    animation:"slide-in"
  })
  baguetteBox.run(".gallerij2",{
    animation:"slide-in"
  })
  baguetteBox.run(".gallerij3",{
    animation:"slide-in"
  })
   
    
     

   
    
   
 
 

   /* Prijslijstpagina*/

  



});
 /*Contactpagina*/
 /*GoogleMaps foutmelding htlm5 oplossen*/

$("#four").marginheight = "0";
$("#four").marginWidth = "0";
$("#four").frameborder = "0";
$("#four").scrolling = "no";



//geleidelijk  naar het gedeelte gaan bij klikken menubalk
$("#navigation li a").on("click", function(e) {
  e.preventDefault();
  let targetElement = $(this).attr("href");
  let targetPosition = $(targetElement).offset().top;
  $("html,body").animate({ scrollTop: targetPosition - 85 }, "slow");
});

//navigatie sticky


const nav =$("#navigation");
const navTop = nav.offset().top;

$(window).on("scroll", stickyNavigation);

function stickyNavigation(){
  var body = $("body");
  if ($(window).scrollTop()>= navTop) {
    body.css("padding-top", nav.outerHeight()+ "px");
    body.addClass("fixedNav");
    
  } else {
    body.css("padding-top", 0);
    body.removeClass("fixedNav");
  }

};





