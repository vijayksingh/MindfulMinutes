chrome.scripting.executeScript({
  target: { tabId: tab.id },
  function: injectAndMount,
});

function injectAndMount() {
  const appContainer = document.createElement("div");
  appContainer.id = "extension-root";
  document.body.appendChild(appContainer);

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("react.js");
  document.body.appendChild(script);
}
