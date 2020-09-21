 
    console.log("Background running"); 
    function handleUpdated (tabId) { 
        let msg = { 
        txt : "Hello" 
        } 
        chrome.tabs.sendMessage(tabId,msg); 


} 

chrome.tabs.onUpdated.addListener(handleUpdated);
