# 管理輸出

## 生成對應 HTML

創建了一個全新的文件，所有的包會自動添加到 html 中

```js
npm install -D HtmlWebpackPlugin

import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  //...
  plugins:[
    new HtmlWebpackPlugin({ title: '管理输出' })
  ]
  //...
}
```

## 清空文件夾

```js
npm install -D CleanWebpackPlugin

import CleanWebpackPlugin from 'clean-webpack-plugin'

module.exports = {
  //...
  plugins:[
    new CleanWebpackPlugin()
  ]
  //...
}
```

https://v4.webpack.docschina.org/guides/output-management/
