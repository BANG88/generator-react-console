'use strict';
var yeoman = require('yeoman-generator');
var makeCommonName = require('../../utils').makeCommonName;

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
        this.template('constant.js', 'src/constants/' + this.capitalizeFileName + '.js')
    }
});
