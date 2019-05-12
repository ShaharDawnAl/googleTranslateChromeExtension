'use strict';
chrome.contextMenus.removeAll();
var showForPages = ["*://*.1688.com/*", "*://*.taobao.com/*"];
var menuItem = {
  "id": "translate",
  "title": "Translate This Page",
  "contexts": ["page"],
  "documentUrlPatterns": showForPages
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "translate") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tab.id, { text: "report_back" });
    });

/*
    chrome.tabs.detectLanguage(tab.id, function (language) {
      alert("tab.id: " + tab.id + " info.pageUrl: " + info.pageUrl + " language: " + language);
    });
*/

  }
});
