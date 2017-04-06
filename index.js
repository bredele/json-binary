/**
 * Dependencies
 */

const extract = require('binary-extract')

/**
 *
 */

module.exports = function(buffer) {
  buffer = new Buffer(buffer)
  return new Proxy({}, {
    get(target, key) {
      return extract(buffer, key)
    }
  })
}
