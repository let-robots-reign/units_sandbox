import React from 'react';
import { isMono } from './isMono';
import * as assert from 'assert';

describe('test isMono function', () => {
  test('[1, 2, 3]', () => {
    const result = isMono([1, 2, 3]);

    assert.strictEqual(result, true);
  });

  test('[1, 1, 2, 2]', () => {
    const result = isMono([1, 1, 1]);

    assert.strictEqual(result, true);
  });

  test('[3, 2, 1]', () => {
    const result = isMono([3, 2, 1]);

    assert.strictEqual(result, true);
  });

  test('[1, 2, 3, 1]', () => {
    const result = isMono([1, 2, 3, 1]);

    assert.strictEqual(result, false);
  });

  test('[3, 2, 1, 2]', () => {
    const result = isMono([3, 2, 1, 2]);

    assert.strictEqual(result, false);
  });
})
