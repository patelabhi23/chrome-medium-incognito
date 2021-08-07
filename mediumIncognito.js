// For Context Menus
chrome.contextMenus.create(
    {
        title: "Open Medium in Incognito",
        onclick: function (e) {
            mediumIncognito();
        },
    },
    function () { }
);

// For Tabs
function mediumIncognito() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        chrome.windows.create({ url: tabs[0].url, incognito: true });
    });
}

chrome.browserAction.onClicked.addListener(function () {
    mediumIncognito();
});

chrome.commands.onCommand.addListener(function (command) {
    if (command == "mediumIncognito") {
        mediumIncognito();
    }
});
