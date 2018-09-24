'use strict'

import test from 'ava/index'

const config = require('config')
const OVHStorage = require('../lib/OVHObjectStorage')

test('Login to OVH', async t => {
  let storage = new OVHStorage(config.storageConfig)

  let values = await storage.connection()

  t.truthy(values, 'Login response should have a body.')

  t.true(values.token.hasOwnProperty('audit_ids'), 'Token should have audit_ids property.')
  t.true(values.token.hasOwnProperty('expires'), 'Token should have expires property.')
  t.true(values.token.hasOwnProperty('id'), 'Token should have id property.')
  t.true(values.token.hasOwnProperty('issued_at'), 'Token should have issued_at property.')
  t.true(values.token.hasOwnProperty('tenant'), 'Token should have tenant property.')

  t.true(values.endpoint.hasOwnProperty('adminURL'), 'Endpoint should have adminURL property.')
  t.true(values.endpoint.hasOwnProperty('id'), 'Endpoint should have id property.')
  t.true(values.endpoint.hasOwnProperty('internalURL'), 'Endpoint should have internalURL property.')
  t.true(values.endpoint.hasOwnProperty('publicURL'), 'Endpoint should have publicURL property.')
  t.true(values.endpoint.hasOwnProperty('region'), 'Endpoint should have region property.')
})
