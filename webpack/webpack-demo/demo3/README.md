# 開發環境

## 使用 source map

干嘛用？？`debugger` 時能找到對應源碼位置

```js
// webpack 4+ 內置功能

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // source map config option
  //...
};
```

## 文件監聽

文件變更后重新編釋

```js
// 作為 webpack 命令執行參數傳入
// package.json
{
  //...
  "watch": "webpack --watch",
  //...
}

npm run watch
```

https://v4.webpack.docschina.org/guides/development/

## dev-server  

構建具有 live reloading 功能的服務器

```js
npm install -D webpack-dev-server

// webpack.config.js
module.exports = {
	//...
	devServer: {
		contentBase: './dist'
	}
	//...
}

// package.json
{
	"script": {
		"start": "webpack-dev-server --open"
	}
}

```