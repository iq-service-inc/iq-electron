![Electron](http://10.9.173.136/uploads/-/system/temp/808c99fe99a3e9eed03d2eef73d107ac/electron.fw.png)
# IQ-Electron

IQ-Electron 基於 [IQ-React 2](http://10.9.173.136/SideProject/iq-react2) 前端初始包建立，你可以完全使用 IQ-React 2 一模一樣的開發經驗，無痛開發 [ElectronJS](https://www.electronjs.org/) 跨平台桌面應用程式！


## Demo

體驗 IQ-Electron 製作的 exe 應用程式

#### win32 x64：[IQ-Electron-win32-x64.zip](https://iqservice.sharepoint.com/:u:/s/DevTeam1/EUZtB0E0w4NDvaWr9rALWsYBR2__VGN_5g1u_Lxv8F8HDw?e=6RF2ru)

![elec-windows](http://10.9.173.136/uploads/-/system/personal_snippet/67/d9af17691fe20301acf428a9b74ac56c/elect-window.png)


## Quick Start

Fork 本專案便可進行開發，完全與  [IQ-React 2](http://10.9.173.136/SideProject/iq-react2) 流程開發相同，使用瀏覽器進行網頁開發

  
**可參考以下指令：**

```
git clone http://10.9.173.136/SideProject/IQ-Electron.git my_app
cd my_app
npm install
```

**使用瀏覽器開發**
  
```
npm start
```
  

**使用 Elecron 開發**
  

需要兩個終端機：

* 第一個：  

```
npm start
```
  
* 第二個 (使用 Electron 去顯示 `http://localhost:888` 而已)：  
  
```
npm run start-electron
```

  
## 📦 Production 打包 

本專案使用 [Electron Packager](https://github.com/electron/electron-packager) 進行打包，所有環境都已經內建 👏


### 打包成執行檔

預設將使用 `win32 x86` 架構進行封裝，打包完成後執行檔將放置於專案目錄下的 **`IQ-Electron-win32-x64`** 目錄中

```
npm run pack
```

### 修改應用程式的 ICON


自行取代專案中的 `/src/img/favicon.ico` 檔案，便會在打包後應用到 exe 應用程式的圖案

* 檔名必須是 `favicon.ico`
* 圖檔必須是 `ico` 格式


### 更多打包方式

參考 [Electron Packager](https://electron.github.io/electron-packager/master/modules/electronpackager.html#archoption) 官方文件的設定方式，並按照以下的流程設置到 `package.json` 的 `scripts` 即可，以下為 `npm run pack` 的流程說明  


**`pack` 打包流程解說：**  

```powershell
# 設置打包環境
set NODE_ENV=production &&  
# 使用 webpack 打包
webpack --progress --config webpack.prod.js && 
# 將 electron 目錄複製到 dist 下的 electron 目錄
xcopy /E /I /Y electron dist\\electron && 
# 將 Package.json 複製到 dist 下
copy /Y package.json dist && 
# 使用 electron-packager 進行打包，可參考官網修改以下設定
electron-packager dist IQ-Electron --platform=win32 --arch=x64 --icon=dist/favicon.ico --overwrite
```

> 可以參考 `pack` 的設置方式，設置自己需要的打包方式


## ENV Version

* **Node.js: v14.5.1**
* **npm: 6.14.8**


## Package Version

* **react: 16**
* **redux: 4** 
* **react-router-dom: 4** 
* **connected-react-router: 6** 
* **postcss-loader: 3**
* **react-intl: 4**
* **@fortawesome/react-fontawesome: 0.19**

## Dev Package Version

* **babel: 7**
* **webpack: 4**


  
  
## License

Copyright 2020-2021 Zap

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.   
