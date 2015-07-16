# fis-optimizer-clean-css

A optimizer for fis to compress css by using clean-css.

## 使用方式 

在fis中默认内置

## 配置

在配置文件(默认fis-conf.js)配置 `fis.config.set('settings.optimizer.clean-css', option)`

eg:

```javascript
fis.config.set('settings.optimizer.clean-css', {
    'keepBreaks': true
});
```

FIS3:
```js
fis
.match('*.{scss,sass,less,css}', {
    optimizer: fis.plugin('clean-css',{
        //option
    })
})
```

`option` 全部参数可参见[clean-css文档](https://github.com/GoalSmashers/clean-css#how-to-use-clean-css-programmatically)

