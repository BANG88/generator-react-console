'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('ReactConsole:generators/component', function () {
  before(function (done) {
    helpers.testDirectory(path.join(__dirname, './tmp'), function () {
      helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments('name')
      .withOptions({ skipInstall: true, force: true })
      .on('end', done);
    });
  })

  it('create component file', function () {
    assert.file([
      'routes/Name/components/Name.jsx'
    ]);
  });
});
