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
      type: 'confirm',
      name: 'includeBreadcrumb',
      message: '是否启用面包屑导航？',
      default: true
    }, {
        type: 'confirm',
        name: 'includeSearchBox',
        message: '是否需要包含搜索栏？',
        default: false
      }, {
        type: 'confirm',
        name: 'includeDataTable',
        message: '是否需要包含DataTable？',
        default: false
      }, {
        type: 'confirm',
        name: 'includeDataTableRowSelection',
        message: '是否需要包含选择框？',
        default: false,
        when: function (answers) {
          return answers.includeDataTable
        }
      }, {
        type: 'string',
        name: 'DataTableUrl',
        message: '指定一个资源（url）地址',
        default: '',
        when: function (answers) {         
          return answers.includeDataTable
        }
      }];

    this.prompt(prompts, function (props) {
      this.includeSearchBox = props.includeSearchBox;
      this.includeDataTable = props.includeDataTable;
      this.includeDataTableRowSelection = props.includeDataTableRowSelection;
      this.DataTableUrl = props.DataTableUrl;
      this.includeBreadcrumb = props.includeBreadcrumb;
      done();
    }.bind(this));

  },

  writing: function () {
    this.template('component.jsx', 'src/' + this.subComponents + this.capitalizeName + '.jsx')
  }
});
