chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request, sender, response) {
  switch (request.todo) {
    case "changeColor":
      let addColor = "#" + request.clickedColor;

      $(".api").css("color", addColor);
      break;
    default:
      return;
  }
});
