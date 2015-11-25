'use strict';
var yeoman = require('yeoman-generator');
var makeCommonName = require('../../utils').makeCommonName;
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: '创建一个常量文件'
    });

    makeCommonName.call(this, 'Constants');

    this.log('创建 ' + this.name + ' 常量...');


  },

  writing: function () {
    this.log.info('可以使用多个参数在当前常量模块下同时创建多个常量值\r\n yo react-console:constants 常量模块 a b c d e f ');
    var file = 'src/constants/' + this.capitalizeFileName + '.js';
    var existsFile = this.fs.exists(file);
    var args = this.args;
    
   
    //如果不存在此文件则创建
    if (!existsFile) {
      this.template('constant.js', file)
    }
    else {


      var constants = require(path.join(this.env.cwd, file));

      if (!constants) {

        throw 'Hehe';
      }


      var states = this._states;
      var prefix = this._prefix;

      args.forEach(function (c) {
        var key = prefix + c;
        if (!constants[key]) {

          states.forEach(function (s) {
            key = prefix + c + s;
            key = key.toUpperCase();

            constants[key] = key;
          })
        }
      });
 
      //写入文件
      this.fs.write(file, 'module.exports = ' + JSON.stringify(constants, null, 2));


    }


  }
});
