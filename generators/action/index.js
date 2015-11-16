'use strict';
var yeoman = require('yeoman-generator');
var makeCommonName = require('../../utils').makeCommonName;

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: '创建一个Action'
        });

        makeCommonName.call(this, 'actions');


        this.log('创建 ' + this.name + ' Action...');

    },

    writing: function () {
        this.template('action.js', 'src/actions/' + this.capitalizeFileName + '.js')
    }
});
