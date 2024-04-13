(function () {
  if (document.getElementById("extension-root")) {
    console.log("Tracker already injected.");
    return;
  }

  const appContainer = document.createElement("div");
  appContainer.id = "extension-root";
  document.body.appendChild(appContainer);

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("react.js");
  script.onload = function () {
    // Ensure the script is loaded before trying to mount the React app
    if (document.getElementById("extension-root")) {
      const root = createRoot(document.getElementById("extension-root"));
      root.render(<App />);
    }
  };
  document.body.appendChild(script);
})();
