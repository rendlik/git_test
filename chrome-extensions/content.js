console.log("ahoj")

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message,sender,sendResponse){
    console.log(message.text)
}