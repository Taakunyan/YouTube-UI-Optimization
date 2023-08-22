chrome.webNavigation.onCommitted.addListener(injectScript, {url:[{urlPrefix:'https://www.youtube.com/watch'}]});
chrome.webNavigation.onHistoryStateUpdated.addListener(injectScript, {url:[{urlPrefix:'https://www.youtube.com/watch'}]});

function injectScript(tab){
    chrome.scripting.insertCSS({target:{tabId:tab.tabId}, files:["style.css","tab.css"]});
    chrome.scripting.executeScript({target:{tabId:tab.tabId}, files:["tab.js"]});
}