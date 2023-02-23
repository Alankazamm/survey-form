import { test, expect } from 'vitest';
import { createForm } from '../filledInfos.js';
import { filledForm } from '../filledInfos.js';
test('it should return something', () => {
    createForm({
        name:'as',
        email: 'sla',
        age: '29',
        status: '2',
        market: 'stk',
        invest: 'ytb',
        resources: ['exp'],
        details: 'hi'
    });
    expect(filledForm).toStrictEqual([
        "as",
       "sla",
        "29",
        "My account status is okay.",
        "stock market",
        "Not answered.",
         [
          "experience with little investment",
        ],
        "hi",
      ]);
})
