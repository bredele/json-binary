/**
 * Dependencies
 */

const extract = require('binary-extract')

/**
 * Extract values from json buffer and expose an
 * object-like API.
 *
 * @param {String||Buffer}
 * @return {Object}
 * @api public
 */

module.exports = function(buffer) {
  buffer = new Buffer(buffer)
  return new Proxy({}, {
    get(target, key) {
      return key in target
        ? target[key]
        : extract(buffer, key)
    }
  })
}
