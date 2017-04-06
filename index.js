

module.exports = function() {
  return new Proxy({}, {
    get(target, key) {
      console.log(key)
    }
  })
}
