

chrome.browserAction.onClicked.addListener(iconClicked)

function iconClicked(tab){
    console.log(2)
    let msg = {
        text: "How are you"
    }
    chrome.tabs.sendMessage(tab.id, msg )
}