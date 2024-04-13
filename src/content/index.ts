chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const dogImg: HTMLImageElement = document.createElement("img");
  dogImg.src = message;
  document.body.appendChild(dogImg);
});
