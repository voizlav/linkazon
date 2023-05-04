# Linkazon

Have you ever tried sharing an Amazon product link, only to find that the URL is long and awkward? It can be frustrating to send a link that's difficult to read or remember. That's where Linkazon Chrome extension comes in. It's lightweight and simplifies the process of sharing products from Amazon.com

## Manual installation

1. Download the extension's source code from repository
    - `git clone git@github.com:voizlav/linkazon.git`
    - `cd linkazon/`
2. Open [Google Chrome](https://www.google.com/chrome/) or [Brave](https://brave.com/download/)
3. In the address bar, type `chrome://extensions`
4. Enable **Developer mode** by toggling the switch in the top right corner of the page
6. Click the **Load unpacked** button in the top left corner of the page
7. Select the folder where you cloned the extension's source code
8. The extension will now be installed and ready to use

You should see the Amazon link shortener icon in your browser's toolbar.

## Permissions

Linkazon requires the following permissions:

**[activeTab](https://developer.chrome.com/docs/extensions/mv3/manifest/activeTab/)**  
Allows the extension to access the currently active tab in the Chrome browser. This is necessary to retrieve the URL of the Amazon product page that the user wants to shorten.

**[clipboardWrite](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)**  
Allows the extension to write data to the user's clipboard. This is necessary to copy the shortened link to the clipboard, so that the user can easily paste it into emails, chat messages, or other applications.

**[storage](https://developer.chrome.com/docs/extensions/reference/storage/)**  
Allows the extension to store data locally on the user's computer. I plan to use this permission in the future to store a history of the shortened links that the user has created. This will allow the user to easily access their past links and reuse them if needed.