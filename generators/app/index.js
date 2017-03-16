'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('generator-hoge') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'appname',
        message: 'What your app name?',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'id',
        message: 'What your app\'s reverse-domain identifier?'
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is an Author?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is an Author email?'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: {
    dirs: function() {
      this.fs.copy(
        this.templatePath('hooks'),
        this.destinationPath('hooks')
      );
      this.fs.copy(
        this.templatePath('www/img'),
        this.destinationPath('www/img')
      );
    },
    views: function() {
      this.fs.copy(
        this.templatePath('www/index.html'),
        this.destinationPath('www/index.html')
      );
    },
    styles: function() {
      this.fs.copy(
        this.templatePath('www/css/app.css'),
        this.destinationPath('www/css/app.css')
      );
    },
    scripts: function() {
      this.fs.copy(
        this.templatePath('www/js'),
        this.destinationPath('www/js')
      );
    },
    config: function() {
      this.fs.copyTpl(
        this.templatePath('config.xml'),
        this.destinationPath('config.xml'),
        { id: this.props.id, appname:this.props.appname, author:this.props.author, email:this.props.email }
      );
    }
  },

  install: function () {
    // add plugin

    this.spawnCommandSync('cordova', ['plugin','add','cordova-plugin-whitelist']);
    this.spawnCommandSync('cordova', ['plugin','add','https://github.com/evothings/phonegap-estimotebeacons.git']);
    // add cordova platform
    this.spawnCommandSync('cordova', ['platform','add','android']);
    this.spawnCommandSync('cordova', ['platform','add','ios']);

    // this.installDependencies({
    //   npm: true,
    //   bower: true,
    //   yarn: false
    // });
  }
});
