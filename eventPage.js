
// Add onClicked listener to inject the js
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null,{file:"myscript.js"});
});