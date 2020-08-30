chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.todo) {
    case "showPageAction":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs);
        chrome.pageAction.show(tabs[0].id);
      });

      break;

    default:
      return;
  }
});
