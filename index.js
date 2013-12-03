/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var CleanCSS = require('clean-css');

module.exports = function(content, file, conf){
    conf.processImport = false;
    return (new CleanCSS(conf)).minify(content);
};