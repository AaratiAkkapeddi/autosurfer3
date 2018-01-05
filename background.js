
function randomFromArray(arr){
  return Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
}


// background page

chrome.browserAction.onClicked.addListener(function(tab) {
   $.getJSON("https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=info&format=json&inprop=url", function(data) {
     
    var randomUrl = data["query"]["pages"][Object.keys(data["query"]["pages"])[0]].fullurl;
    chrome.storage.sync.set({"myKey": randomUrl.split('/wiki/')[1]});
    window.location = randomUrl;
    chrome.tabs.create({ url: randomUrl }, function(tab){

      chrome.tabs.executeScript(tab.id,{code:"document.title = 'wikidiver'"});
      


      setInterval(function(){
        chrome.tabs.executeScript(tab.id, { file: "jquery.min.js" }, function() {
          chrome.tabs.executeScript(tab.id, { file: "zoom.js" }, function() {
            chrome.tabs.executeScript(tab.id, { file: "content.js" }, function() {    
            });
          });
        });
      },2000)


    });

  });
});


