chrome.runtime.onMessage.addListener((message, sender)=> {
  //console.log('background');
  //if()
  //chrome.tabs.executeScript({
    //file: 'assets/js/inject.js'
  //});
  if(!message.manageMischief) return;
  else{chrome.tabs.executeScript({
    file: 'assets/js/inject.js'
  }); }
});
