import { test } from 'node:test'
import assert from 'node:assert/strict'
import { slugify, truncate } from '../src/strings.js'

test('slugify basic', () => assert.equal(slugify('Hello World'), 'hello-world'))
test('slugify trims separators', () => assert.equal(slugify('  --Hi there!-- '), 'hi-there'))
test('truncate leaves short text alone', () => assert.equal(truncate('short', 10), 'short'))
test('truncate adds an ellipsis', () => assert.equal(truncate('abcdefghij', 5).length, 5))
