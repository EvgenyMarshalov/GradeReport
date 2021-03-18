
const { BrowserWindow } = require("electron");
const electron = require("electron");

function createWindow() {
    const window = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true
        }
    }
    );
    devTools = new BrowserWindow();
    window.webContents.setDevToolsWebContents(devTools.webContents);
    window.webContents.openDevTools({ mode : "detach" })
    window.loadFile("views/index.html");
}

electron.app.whenReady().then(createWindow);


/*
const electron = require("electron");

function createWindow() {
    const window = new electron.BrowserWindow({
        width: 800,
        height: 600
    });
    window.loadFile("views/index.html");
}

electron.app.whenReady().then(createWindow);
*/