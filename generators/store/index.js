'use strict';
var yeoman = require('yeoman-generator');
var makeCommonName = require('../../utils').makeCommonName;

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: '创建一个Store'
        });

        makeCommonName.call(this, 'store');

        this.log('创建 ' + this.name + ' ...');

    },

    writing: function () {
        this.template('store.js', 'src/stores/' + this.capitalizeFileName + '.js')
    }
});
