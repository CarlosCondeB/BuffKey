const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.loadFile(path.join(__dirname, "Screens", "index.html"));
};

    //verificacion de login
    function checkLogin(username, password){
        if(username == "admin" && password == "1234"){
            return true;
        }else{
            return false;
        }
    }

    app.whenReady().then(() => {
        createWindow();

        app.on("activate", function(){
            if(BrowserWindow.getAllWindows().length ===0) createWindow();

        })
});

app.on("window-all-closed", function(){
    if(process.platform !== "darwin") app.quit();
})

