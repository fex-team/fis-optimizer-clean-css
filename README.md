# fis-optimizer-clean-css

A optimizer for fis to compress css by using clean-css.

## 使用方式 

在fis中默认内置

## 配置

在配置文件(默认fis-conf.js)配置 `fis.config.settings('optimizer.clean-css', option)`

eg:

```javascript
fis.config.settings('optimizer.clean-css', {
    'keepBreaks': true
});
```

`option` 全部参数可参见[clean-css文档](https://github.com/GoalSmashers/clean-css#how-to-use-clean-css-programmatically)

