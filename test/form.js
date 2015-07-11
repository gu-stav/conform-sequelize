var assert = require('assert');
var Form = require('../lib/form');
var model = require('./fixture/model');
var Sequelize = require('sequelize');

describe('Form', function() {
  var sequelize,
      model;

  before(function() {
    sequelize = new Sequelize('conform_test', '', '', {
      dialect: 'sqlite',
    });
    model = sequelize.import('./fixture/model');
  });

  describe('init', function() {
    it('should create fields from the given instance', function() {
      var form = new Form(model.build());

      assert.equal(form.fields.length, 5);
    });
  });
});