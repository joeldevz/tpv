const { app, BrowserWindow, autoUpdater, dialog } = require('electron')
require('update-electron-app')({
    repo: 'joeldevz/tpv',
    updateInterval: '1 hour',
    logger: require('electron-log')
})

let win;

function createWindow() {
    win = new BrowserWindow({
        minWidth: 800,
        minHeight: 900,
        width: 350,
        height: 345,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true

        }
        , userAgent: 'Chrome',
        frame: false,

        //transparent:true,
    })
    win.maximize()
    win.loadFile('./src/views/dashboard.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
module.exports = { win }