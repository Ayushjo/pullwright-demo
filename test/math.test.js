import { test } from 'node:test'
import assert from 'node:assert/strict'
import { add, multiply, divide } from '../src/math.js'

test('add', () => assert.equal(add(2, 3), 5))
test('multiply', () => assert.equal(multiply(4, 5), 20))
test('divide', () => assert.equal(divide(10, 4), 2.5))
