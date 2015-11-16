'use strict';
var yeoman = require('yeoman-generator');
var makeCommonName = require('../../utils').makeCommonName;

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: '创建一个component'
        });

        makeCommonName.call(this, 'components');

        this.log('创建 ' + this.name + ' 组件...');

    },

    writing: function () {
        this.template('component.jsx', 'src/routes/' + this.capitalizeName + '/components/' + this.capitalizeName + '.js')
    }
});
