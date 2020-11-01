/** 
*  eenvoudige cookie-permissie voor Google Analytics
*  Zet, leest of schrijft cookie waarin de permissie wordt bijgehouden 
*  voor cookie-gebruik, specifiek voor Google Analytics,
*  conform de wetgeving die per 5 juni 2012 van kracht is.
*
*  Paul van Eck - www.paqqa.nl
*  17-10-2012
*/
// check if exist
function getCookie(cookieNaam){
    if (document.cookie.length > 0) {
      begin = document.cookie.indexOf(cookieNaam + "=");
      if (begin != -1)
      {
        begin += cookieNaam.length+1;
        end = document.cookie.indexOf(";", begin);
        if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(begin, end));
      }
    }
    return null;
  }
  
  // creëer cookie
  function setCookie(cookieNaam, value, expiredays) {
    var ExpireDate = new Date();
    ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
    document.cookie = cookieNaam + "=" + escape(value) + 
    ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());  
  }
  
  // verwijder cookie
  function delCookie(cookieNaam) {
    if (getCookie(cookieNaam)) {
      document.cookie = cookieNaam + "=" + "; expires= Fri, 11 Aug 2007 00:00:01 GMT";
    }
  }
  
  // toestemming vragen
  function askCookiePermission() {
    if (!getCookie(cookieNaam)) {
    // opbouwen venster om permissie te vragen (met jQuery)
    $('#cookie-permissie').hide();
    $('#cookie-permissie').html(tekstCookieEersteBezoek);
    $('#cookie-permissie').slideDown(1000);
    } // if
    else {
      if (getCookie(cookieNaam) == 'allow') {
        $('#cookie-permissie-schakelaar').html(tekstCookieToestemmingIntrekken);
      } else if (getCookie(cookieNaam) == 'disallow') {
        $('#cookie-permissie-schakelaar').html(tekstCookieToestemmingVerlenen);
      }
    }
  }
  
  $(document).ready(function(){
      // creeer de div#cookie-permissie als eerste binnen de DOM, aan het begin van de <body>:
     $('body').prepend('<div id="cookie-permissie" style="display; block; background: #b29c7e; font-family: Verdana;"></div>');
     // creeer de kleine div#cookie-permissie-schakelaar aan het eind van de <body>:
     $('body').append('<div id="cookie-permissie-schakelaar" style="display; block;"></div>');
     
     // teksten voorbereiden
     meerInformatieLink = 'privacy.html'; // vul hier in op welke url de bezoeker meer informatie kan lezen over de cookie-instellingen. Bijvoorbeeld een link naar je Privacy Statement. 
  
     tekstCookieEersteBezoek  = '<div style="display: block; float: right; margin-right: 30px; padding-top: 20px; ">';
     tekstCookieEersteBezoek +=   '<span title="Prima, ik heb geen probleem met de cookies." id="cookies-toestaan" style="border-radius: 5px; cursor: pointer; display: block; margin-bottom: 5px; width: 150px; font-size: 12px;color: white; background: #322525; padding: 2px 5px;">Cookies toestaan</span>';
     tekstCookieEersteBezoek +=   '';
     tekstCookieEersteBezoek +=   '<span title="Nee, ik wil niet dat deze cookies geplaatst worden." id="cookies-weigeren" style="border-radius: 5px; cursor: pointer; display: block; width: 150px; font-size: 10px; color: white; background: #322525; padding: 2px 5px; clear">Cookies weigeren</span>';
     tekstCookieEersteBezoek += '</div>';
     tekstCookieEersteBezoek += '<div style="display: block; float: left; color: #272727; font-size: 12px; padding: 5px 10px; ">';
     tekstCookieEersteBezoek +=   '<h1>Deze site gebruikt cookies</h1>';
     tekstCookieEersteBezoek +=   '<p>Om deze website goed te laten functioneren maken wij onder andere gebruik van cookies die het gebruik van de website meten.<br />';
     tekstCookieEersteBezoek +=   '<a href="'+meerInformatieLink+'" style="color: #322525">Meer informatie over deze cookies.</a></p>';
     tekstCookieEersteBezoek += '</div><br style="clear: both;" />';
     
     tekstCookieToestemmingVerlenen = '<div style="display:block; width: auto; font-size: 10px; padding: 3px 2px; color: white; background:#322525 ; ">';
     tekstCookieToestemmingVerlenen += '<span style="text-decoration: underline; cursor: pointer; " title="Schakel cookies in voor de optimale website-ervaring." id="cookies-toestaan-schakelaar">Cookies: inschakelen</span><span style="font-size: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;(<a title="Meer informatie over cookies." style="color: inherit;" href="'+meerInformatieLink+'">meer informatie</a>)</span></div>';
     
     tekstCookieToestemmingIntrekken = '<div style="display:block; width: auto; font-size: 10px; padding: 3px 2px; color: black; background: transparent; ">';
     tekstCookieToestemmingIntrekken += '<span style="text-decoration: underline; cursor: pointer; " title="Uitschakelen kan uw website-ervaring be&iuml;nvloeden." id="cookies-weigeren-schakelaar">Cookies: uitschakelen</span><span style="font-size: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;(<a title="Meer informatie over cookies." style="color: inherit;" href="'+meerInformatieLink+'">meer informatie</a>)</span></div>';
     
     // waarden initieren
     aantalDagenGeldig = 365; // hoeveel dagen moet de cookie geldig blijven voordat er opnieuw om permissie moet worden gevraagd?
     cookieNaam = '_paqqa_home'; // de naam van de te plaatsen cookie 
     
    // klik op '#cookies-weigeren'  
    $("#cookie-permissie").on('click', '#cookies-weigeren' , function() {
      setCookie(cookieNaam, 'disallow', aantalDagenGeldig);
      $("#cookie-permissie").html('<span></span>');
      $("#cookie-permissie-schakelaar").html(tekstCookieToestemmingVerlenen);
    });
    
    $("#cookie-permissie-schakelaar").on('click', '#cookies-weigeren-schakelaar' , function() {
      setCookie(cookieNaam, 'disallow', aantalDagenGeldig);
      $("#cookie-permissie").html('<span></span>');
      $("#cookie-permissie-schakelaar").html(tekstCookieToestemmingVerlenen);
    });
    
    // klik op '#cookies-toestaan' 
    $("#cookie-permissie").on('click', '#cookies-toestaan', function() {
      setCookie(cookieNaam, 'allow', aantalDagenGeldig);
      $("#cookie-permissie").html('<span></span>');
      $("#cookie-permissie-schakelaar").html(tekstCookieToestemmingIntrekken);
    });
    
    $("#cookie-permissie-schakelaar").on('click', '#cookies-toestaan-schakelaar', function() {
      setCookie(cookieNaam, 'allow', aantalDagenGeldig);
      $("#cookie-permissie").html('<span></span>');
      $("#cookie-permissie-schakelaar").html(tekstCookieToestemmingIntrekken);
    });
   
    askCookiePermission(); // opstarten
  });
  