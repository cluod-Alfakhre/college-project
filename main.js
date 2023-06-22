const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");
    const {exec} = require('child_process')


    
console.log("electron")



    let mainWindow

   async function createWindow () {
    
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
       // frame: false,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation:true,
          preload: path.join(__dirname, `./hello.js`)
        },
        show: false
      })

      mainWindow.loadFile(path.join(__dirname, `/dist/college-project/index.html`))
      /* mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/college-project/index.html`),
          protocol: "file:",
          slashes: true
        })
      ); */
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.once('ready-to-show', mainWindow.show)
      
      mainWindow.on('closed', function () {
        mainWindow = null
      })
      
      mainWindow.webContents.on('did-fail-load', ()=> mainWindow.loadURL(path.join(__dirname, `/dist/college-project/index.html`)))
    }

    app.on('ready', ()=>{

      createWindow()

      /* const startDBServer = exec('node hello.js');
      let doIt = true;

    startDBServer.stdout.on('data', (pid)=>{
        console.log(pid);
        

        if(doIt){
          doIt = false
          createWindow()

        }


    });
    startDBServer.stderr.on('data', (data)=>{
        console.error(data);
    }); */

    })

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })

    