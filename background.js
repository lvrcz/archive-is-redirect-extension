chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "open-in-archive-is",
        title: "Open link in archive.is (Newest)",
                               contexts: ["link"]
    });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-in-archive-is" && info.linkUrl) {
        const archiveUrl = `https://archive.is/${info.linkUrl}`;
        chrome.tabs.create({
            url: archiveUrl,
            active: true
        });
    }
});
