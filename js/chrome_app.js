window.addEventListener('message', onMessage);

var appWindow, appOrigin;

function onMessage(e) {
    appWindow = e.source;
    appOrigin = e.origin;
}