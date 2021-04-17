console = chrome.extension.getBackgroundPage().console;
chrome.storage.sync.clear();
let button = document.getElementById("injectMessage");
let validation = document.getElementById("validation");
sleep = async (ms)=>{ return new Promise(resolve => setTimeout(resolve, ms)); }
sending = async ()=>{
    button.innerHTML="sending."; await sleep(500); 
    button.innerHTML="sending.."; await sleep(500);
    button.innerHTML="sending..."; await sleep(500);
    button.innerHTML="Mischief Managed!"; await sleep(1500);
    button.innerHTML="send";
}
button.addEventListener("click", async ()=> {
    let removeGroup = document.getElementById("message").value;
    chrome.storage.sync.set({"group": removeGroup});
    chrome.runtime.sendMessage({"manageMischief": true});
});
