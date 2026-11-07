# pullwright-demo

A small JavaScript utility library used for [Pullwright](https://pullwright.iayush.com)'s live demo.
Each open issue is a real task you can hand to the agent from the demo page; it plans the change,
edits the code in a sandbox, runs `npm test`, gets an independent review, and opens a draft pull request here.

```
npm test
```

- `src/math.js`: arithmetic helpers
- `src/strings.js`: slugify, truncate
- `src/cart.js`: shopping-cart totals
