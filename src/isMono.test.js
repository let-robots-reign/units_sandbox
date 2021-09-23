import React from 'react';
import { isMono } from './isMono';
import * as assert from 'assert';

describe('test isMono function', () => {
  test('[1, 2, 3]', () => {
    const result = isMono([1, 2, 3]);

    assert.strictEqual(result, true);
  });

  test('[3, 2, 1]', () => {
    const result = isMono([3, 2, 1]);

    assert.strictEqual(result, true);
  });

  test('[1, 100, 1000, -1]', () => {
    const result = isMono([1, 100, 1000, -1]);

    assert.strictEqual(result, false);
  });

  test('[0, 0, 0, 0, 0]', () => {
    const result = isMono([0, 0, 0, 0, 0]);

    assert.strictEqual(result, true);
  });

  test("['aba', 'abb', 'abc', 'abd']", () => {
    assert.throws(
      () => isMono(['aba', 'abb', 'abc', 'abd']), 
      TypeError,
    );
  });

  test('null', () => {
    assert.throws(
      () => isMono(null), 
      TypeError,
    );
  });

  test('undefined', () => {
    assert.throws(
      function() {isMono(undefined)}, 
      TypeError,
    );
  })

  test("{'a': 10}", () => {
    assert.throws(
      () => isMono({ 'a': 10 }), 
      TypeError,
    );
  })
});
