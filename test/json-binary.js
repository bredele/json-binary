/**
 * Test dependencies
 */

const test = require('tape')
const json = require('..')
const read = require('fs').readFile

test('should read value from json buffer', assert => {
  assert.plan(1)
  read(__dirname + '/test.json', (err, buffer) => {
    const obj = json(buffer)
    assert.equal(obj.name, 'olivier')
  })
})
