'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-hoge:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({appname: 'hogehoge', id: 'com.test.hoge', author: 'testauthor', email: 'test@mail.com'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file('hooks/README.md');
    assert.file('platforms/android/android.json');
    assert.file('platforms/ios/ios.json');
    assert.file('platforms/platforms.json');
    assert.file('plugins/cordova-plugin-whitelist/plugin.xml');
    assert.file('plugins/cordova-plugin-estimote/plugin.xml');
    assert.file('plugins/fetch.json');
    assert.file('plugins/ios.json');
    assert.file('plugins/android.json');
    assert.file('www/css/app.css');
    assert.file('www/img/beacon.png');
    assert.file('www/img/logo.png');
    assert.file('www/js/app.js');
    assert.file('www/js/beacon.js');
    assert.file('www/js/lib/jquery-2.1.1.min.js');
    assert.file('www/js/lib/touch.js');
    assert.file('www/index.html');
    assert.file('config.xml');
  });
});
