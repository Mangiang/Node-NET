const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {

    mainWindow = new BrowserWindow({ width: 1800, height: 1200 }); // on définit une taille pour notre fenêtre

    mainWindow.loadURL(`file://${__dirname}/index.html`); // on doit charger un chemin absolu

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});