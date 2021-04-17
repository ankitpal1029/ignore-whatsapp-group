//startTimer = async()=>{ setTimeout(inject, 2000); } 
//eventFire = async(MyElement, ElementType)=>{ 
    //let MyEvent = document.createEvent("MouseEvents"); 
    //MyEvent.initMouseEvent(ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
    //MyElement.dispatchEvent(MyEvent); 
//}
inject = async()=>{ 
  console.log('helloo');
    let box= document.querySelectorAll("[dir='auto']"); 
  

    
    let resolveGroup = new Promise(function(resolve, reject){
      chrome.storage.sync.get({"group":true}, function(options){
        resolve(options.group);
      })
    })


  for(let i =0; i < box.length; i ++){
    let grpName = await resolveGroup;
    if(box[i].innerHTML.includes(`${grpName}`)){
        console.log('found punday');
        console.log(box[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        box[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
      }
    }


}
inject();
