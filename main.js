const { app, BrowserWindow } = require('electron')

function createWindow () {
  // ウインドウ作成
  //test
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
  })

  // index.htmlの内容でウィンドウ表示
  mainWindow.loadFile('Apps/index.html')
}

// Electronの初期化完了時に呼ばれる
app.whenReady().then(() => {
  createWindow()

  // Mac用処理
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// (Mac以外は)ウインドウが全部閉じられたら終了
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})