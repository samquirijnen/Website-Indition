   
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
   
 
 

    jQuery("#nanogallery2").nanogallery2( {
      thumbnailWidth:     'auto XS200 SM300',
      thumbnailHeight:    '500 XSauto SMauto',
     
     thumbnailGutterWidth:40,
     thumbnailGutterHeight:40,
     thumbnailBorderHorizontal:'',
     thumbnailBorderVertical:'',
    
     

     items: [
        { src: 'fotosKrop/women16.jpg', title: 'Hair',  ID: 1,	kind:'album' },
       
        { src: 'fotosKrop/women16.jpg', srct: 'fotosKrop/women16.jpg',ID: 4, albumID: 1,class:'foto' },
        { src: 'fotosKrop/women3.jpg', srct: 'fotosKrop/women3.jpg',ID: 5, albumID: 1 },
        { src: 'fotosKrop/women4.jpg', srct: 'fotosKrop/women4.jpg',ID: 6, albumID: 1 },
        { src: 'fotosKrop/women9.jpg', srct: 'fotosKrop/women9.jpg',ID: 7, albumID: 1 },
        { src: 'fotosKrop/women11.jpg', srct: 'fotosKrop/women11.jpg',ID: 8, albumID: 1 },
        { src: 'fotosKrop/women14.jpg', srct: 'fotosKrop/women14.jpg',ID: 9, albumID: 1 },

        { src: 'fotosKrop/women5.jpg',                         title: 'Make Up',  ID: 2,	kind:'album' },
        { src: 'fotosKrop/women5.jpg', srct: 'fotosKrop/women5.jpg', title: 'image A1', ID: 10, albumID: 2},
        { src: 'fotosKrop/women.jpg', srct: 'fotosKrop/women.jpg', title: 'image A2', ID: 11, albumID: 2 },
        { src: 'fotosKrop/women12.jpg', srct: 'fotosKrop/women12.jpg', title: 'image A3', ID: 12, albumID: 2 },

        { src: 'fotosKrop/women13.jpg',                         title: 'Color And Style',  ID: 3,	kind:'album' },
        { src: 'fotosKrop/women13.jpg', srct: 'fotosKrop/women13.jpg', title: 'image A1', ID: 13, albumID: 3},
        { src: 'fotosKrop/women10.jpg', srct: 'fotosKrop/women10.jpg', title: 'image A2', ID: 14, albumID: 3 },
        { src: 'fotosKrop/women12.jpg', srct: 'fotosKrop/women12.jpg', title: 'image A3', ID: 15, albumID: 3 },
    ]
    
   
  });

   /* Prijslijstpagina*/

   /*Contactpagina*/



});
//geleidelijk  naar het gedeelte gaan bij klikken menubalk
$("#navigation li a").on("click", function(e) {
  e.preventDefault();
  let targetElement = $(this).attr("href");
  let targetPosition = $(targetElement).offset().top;
  $("html,body").animate({ scrollTop: targetPosition - 85 }, "slow");
});

//navigatie sticky
//const gebruiken als je nav variabele niet meer wil veranderen

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
$(".buttonGallerij").on('click',function (e) {
  e.preventDefault();
  $('#nanogallery2') + this.id;
})




