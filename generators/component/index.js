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

  askFor: function () {
    var done = this.async();

    var prompts = [{
      type: 'boolean',
      name: 'includeSearchBox',
      message: '是否需要包含搜索栏？',
      default: false
    }, {
        type: 'boolean',
        name: 'includeBreadcrumb',
        message: '是否启用面包屑导航？',
        default: true
      }];

    this.prompt(prompts, function (props) {
      this.includeSearchBox = props.includeSearchBox;
      this.includeBreadcrumb = props.includeBreadcrumb;
      done();
    }.bind(this));

  },

  writing: function () {
    this.template('component.jsx', 'src/' + this.subComponents + this.capitalizeName + '.jsx')
  }
});
