/**
 * Created by bang on 11/16/15.
 */
var capitalize = require('lodash.capitalize');

module.exports = {

  /**
   * 创建常用的名字
   * @param generator
   */
  makeCommonName: function (generator) {

    var names = this.name.split('/');
    var nameCount = names.length;

    this.subModule = nameCount > 1;
    //单词首字母大写
    this.capitalizeName = capitalize(this.name);
    //文件名
    this.capitalizeFileName = capitalize(this.name) + capitalize(generator);
    //大写字母
    this.upperName = this.name.toUpperCase();
    // 小写字母
    this.lowerName = this.name.toLowerCase();

    this.constants = this.capitalizeName + 'Constants';

    this.actions = this.capitalizeName + 'Actions';

    this.store = this.capitalizeName + 'Store';


    this.subComponents = getComponentsPath(this.capitalizeName);
    this.subRoutes = getRoutesPath(this.capitalizeName);

    function getComponentsPath(component){
      return 'routes/' + capitalize( component ) + '/components/';
    }

    function getRoutesPath(component){

      return 'routes/' + capitalize( component ) + '/';

    }

    if(nameCount> 1){

      var routes = '';
      var len = 0;
      this.capitalizeName = capitalize(names[nameCount - 1]);
      while(len < names.length){
        routes+=getRoutesPath(names[len]);
        len++
      }
      this.subComponents = routes+'/components/';
      this.subRoutes = routes;
      this.lowerName = this.capitalizeName.toLowerCase();

    }


    return this

  }

};

