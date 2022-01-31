// Replace your background.js code here

const api_endpoint = 'https://0ahl740628.execute-api.us-east-2.amazonaws.com';

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        console.log("This is a first install!");
    } else if (details.reason == "update") {
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);

    fetch(api_endpoint + '/prod/addresses').then(r => r.text()).then(result => {
        // Result now contains the response text, do what you want...
        console.log(result);
    });
});
