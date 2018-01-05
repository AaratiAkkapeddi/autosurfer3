function randomFromArray(arr){
  return Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
}


$(document).ready(function(){

var myOldWord = $('<a>'); 

myOldWord.css('position', 'fixed').css('margin','0').css('top','0').css('left','0').css('color','blue').css('background','whitesmoke').css('padding','20px').css('font-family','courier').css('font-size','40px');
$('body').append(myOldWord);
  chrome.storage.sync.get('myKey', function (result) {
     myOldWord.text("previous:\n" + result["myKey"]);
     myOldWord.attr('href', "https://en.wikipedia.org/wiki/" + result["myKey"]);   
  });
  

   l = $("#mw-content-text").find('a[href^="/wiki/"]:visible').not('a[href^="/wiki/Template:"]').not('a[href^="/wiki/User:"]').not('a[href^="/wiki/User_talk:"]').not('a[href^="/wiki/Digital_object_identifier"]').not('a[href^="/wiki/File:"]').not('a[href^="/wiki/International_Standard_Serial_Number"]').not('a[href^="/wiki/International_Standard_Book_Number"]').not('a[href^="/wiki/Help:"]').not('a[href^="/wiki/Special:"]').not('a[href^="/wiki/Wikipedia:"]');
   
  
   var randomIndex = randomFromArray(l);

   $(l[randomIndex]).css('background','yellow');

   setTimeout(function(){
        zoom.to({ element: l[randomIndex], padding: 10, function(){
            
           } });
           setTimeout(function(){

            document.title = "wiki-diver"

            chrome.storage.sync.set({"myKey": window.location.href.split("/wiki/")[1]}, function(){
              window.location = l[randomIndex].href;

             

              $('link[rel="shortcut icon"]').attr('href', "http://aarati.me/favicon.ico");

            });
      },1000)
   },2000)
   

   
})


