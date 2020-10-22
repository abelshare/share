# 管理资源

## 加载 CSS

```js
// 先安装相关loader
npm install -D style-loader css-loader

// 在webpack.config.js中添加
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  //...
}
```

## 加载 image

```js
// 先安装相关loader
npm install -D file-loader

// 在webpack.config.js中添加
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg|gif|webp)$/,
        use: ['file-loader']
      }
    ]
  }
  //...
}
```

## 加载 fonts

```js
// 先安装相关loader
npm install -D file-loader

// 在webpack.config.js中添加
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
  //...
}
```

```css
/* 通过@font-face来声明混合后使用 */
@font-face {
  font-family: 'MyFont';
  src: url('./my-font.woff2') format('woff2'), url('./my-font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

.hello {
  color: red;
  font-family: 'MyFont';
}
```

## 加载數據

https://v4.webpack.docschina.org/guides/asset-management/
