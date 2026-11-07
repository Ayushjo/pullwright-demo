import { test } from 'node:test'
import assert from 'node:assert/strict'
import { subtotal, total } from '../src/cart.js'

const items = [{ price: 1000, qty: 2 }, { price: 250, qty: 1 }]
test('subtotal', () => assert.equal(subtotal(items), 2250))
test('total with tax', () => assert.equal(total(items, 0.18), 2655))
test('total without tax', () => assert.equal(total(items), 2250))
