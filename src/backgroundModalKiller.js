chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({ file: 'killem.js' });
});
