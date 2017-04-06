/**
 * Test dependencies
 */

const test = require('tape')
const json = require('..')
const read = require('fs').readFile
const extract = require('binary-extract')

test('should read value from json buffer', assert => {
  assert.plan(1)
  read(__dirname + '/test.json', (err, buffer) => {
    const obj = json(buffer)
    assert.equal(obj.name, 'olivier')
  })
})

test('should buffer json if passed as a string', assert => {
  assert.plan(1)
  const obj = json('{"name":"olivier"}')
  assert.equal(obj.name, 'olivier')
})
