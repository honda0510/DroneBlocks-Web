chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('../chrome_app.html', {
        id: "mainwin",
      innerBounds: {
        width: 800,
        height: 600
      }
    });
  });
  