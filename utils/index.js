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


        return this

    }

};

