//startTimer = async()=>{ setTimeout(inject, 2000); } 
//eventFire = async(MyElement, ElementType)=>{ 
    //let MyEvent = document.createEvent("MouseEvents"); 
    //MyEvent.initMouseEvent(ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
    //MyElement.dispatchEvent(MyEvent); 
//}

function getParentNode(element, level=1) { // 1 - default value (if no 'level' parameter is passed to the function)
    while(level-- > 0) {
        element = element.parentNode;
        if(!element) {
            return null; // to avoid a possible "TypeError: Cannot read property 'parentNode' of null" if the requested level is higher than document
        }
    }
    return element;
}


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
        //box[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        let element = getParentNode(box[i],6)
        element.remove();
      }
    }


}
inject();
