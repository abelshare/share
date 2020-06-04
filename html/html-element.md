# html element

## 根元素

<html lang="zh">
<!-- 
  所有元素都是它的子元素
  一般需设定文档语言属性
 -->
</html>
```

## 文档元数据

```html
<html>
  <!-- 对用户不可见，即不会显示在页面上 -->
  <head>
    <!-- 指定文档的字符编码，基本上使用"utf-8"就可了 -->
    <meta charset="utf-8" />
    <!-- 设置整个文档链接的根URL -->
    <base target="_blank" href="http://base.com" />
    <!-- 常用到的元数据 -->
    <meta />
  </head>
</html>
```

`<head>` 规定文档相关配置信息：元数据，标题、引用的文档样式等  
`<base>` 设定文档中所有 url 的根 url，一个文档仅有一个  
`<link>` 外部链接资源，常用于链接文档样式，也可用于`favicon`
`<meta>`
