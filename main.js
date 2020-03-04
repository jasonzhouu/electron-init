const { app, BrowserWindow } = require('electron')
app.on('ready', function () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    mainWindow.loadFile('./dist/index.html')

    mainWindow.openDevTools();
})
