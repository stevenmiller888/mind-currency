
/**
 * Dependencies.
 */

var currency = require('..');
var assert = require('assert');

/**
 * Tests.
 */

describe('currency', function() {
  it('should be an object', function() {
    assert.equal(typeof currency, 'object');
  });

  it('should have a `before` property', function() {
    assert.equal(typeof currency.before, 'function');
  });

  it('should have an `after` property', function() {
    assert.equal(typeof currency.after, 'function');
  });
});
