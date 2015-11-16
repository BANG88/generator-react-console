'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var slug = require('slug');


var FluxGenerator = yeoman.generators.Base.extend({

    init: function () {

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous Flux/React generator!'));

        var prompts = [{
            type: 'string',
            name: 'appName',
            message: 'What\'s the name of your application?',
            default: "Ant Console"
        }, {
            type: 'string',
            name: 'appDesc',
            message: 'Describe your application in one sentence:',
            default: ''
        }];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;
            this.appSlug = slug(props.appName).toLowerCase();
            this.appDesc = props.appDesc;
            done();
        }.bind(this));

    },

    app: function () {

        //folders
        this.mkdir('src/routes');

        this.mkdir('src/actions');
        this.mkdir('src/constants');

        this.directory('src/dispatcher', 'src/dispatcher');
        this.directory('src/components', 'src/components');
        this.directory('src/stores', 'src/stores');
        this.directory('src/utils', 'src/utils');


        //files

        this.copy('src/index.js', 'src/index.jsx');
        this.copy('src/index.html.tpl', 'src/index.html.tpl');

        this.template('_package.json', 'package.json');
        this.template('_README.md', 'README.md');

    },

    npm: function () {
        this.npmInstall([
            'react',
            'react-dom',
            'react-router',
            'reqwest',
            'antd@beta',
            'flux',
            'fbjs',
            'object-assign',
            'js-cookie',
            'history'
        ], {save: true});
    },

    webpack: function () {
        this.npmInstall([
            'babel-core', 'babel-loader@6.1.0', 'babel-preset-es2015', 'babel-preset-stage-0', 'babel-preset-react',
            'babel-plugin-react-transform', 'babel-runtime', 'autoprefixer-loader',
            'css-loader', 'less', 'less-loader',
            'extract-text-webpack-plugin', 'html-webpack-plugin', 'react-transform-catch-errors',
            'react-transform-hmr', 'react-hot-loader', 'redbox-react', 'stats-webpack-plugin', 'style-loader',
            'url-loader', 'warning', 'webpack', 'webpack-dev-middleware', 'webpack-dev-server', 'webpack-hot-middleware'

        ], {saveDev: true});
        this.copy('_webpack.config.js', 'webpack.config.js');
    },

    ui: function () {

        this.directory('src/public', 'src/public');

    },

    server: function () {
        this.directory('scripts', 'scripts');

        this.npmInstall(['express', 'proxy-middleware', 'connect-pushstate', 'open'], {saveDev: true});
    },


    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('gitignore', '.gitignore');
        //this.copy('eslintrc', '.eslintrc');
        this.copy('babelrc', '.babelrc');


        this.composeWith('react-console:route', {args: ['Auth']});

    }
});

module.exports = FluxGenerator;
