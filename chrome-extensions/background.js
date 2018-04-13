

chrome.browserAction.onClicked.addListener(iconClicked)

function iconClicked(tab){
    let msg = {
        text: "How are you"
    }
    chrome.tabs.sendMessage(tab.id, msg )
}