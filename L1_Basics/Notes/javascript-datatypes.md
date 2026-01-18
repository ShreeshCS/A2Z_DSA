# JavaScript Data Types — Quick Notes

This file summarizes JavaScript's data types, common pitfalls, and quick examples you can paste into a REPL or a `.js` file.

## Overview
JavaScript has two broad categories of types:
- Primitive types (immutable, compared by value)
- Object types (mutable, compared by reference)

ECMAScript classifies types as:
- Undefined
- Null
- Boolean
- Number
- BigInt (added in ES2020)
- String
- Symbol (added in ES2015)
- Object

Note: `typeof null === 'object'` is a historical quirk.

---

## Primitive types

### undefined
- Default value of uninitialized variables and missing object properties.
- `typeof x === 'undefined'`.

Example:
```js
let a;
console.log(a); // undefined
```

### null
- Intentional absence of any object value.
- `null` is a primitive. `typeof null === 'object'` (legacy bug).

Example:
```js
const x = null;
console.log(x); // null
```

### boolean
- `true` or `false`.
- Useful for conditionals and flags.

### number
- All numbers (ints and floats) are `number` (IEEE-754 double precision).
- `NaN`, `Infinity`, and `-Infinity` are `number` values.

Pitfalls:
- `0.1 + 0.2 !== 0.3` due to floating-point precision.
- `NaN !== NaN` — use `Number.isNaN(value)`.

Examples:
```js
console.log(1/0); // Infinity
console.log(Number.isNaN(NaN)); // true
```

### BigInt
- Arbitrary-precision integers: created with `123n` or `BigInt(123)`.
- Can't mix `BigInt` and `Number` in arithmetic without explicit conversion.

Example:
```js
const big = 123456789012345678901234567890n;
```

### string
- Immutable sequence of UTF-16 code units.
- Template literals: backticks allow interpolation and multi-line strings.

Example:
```js
const s = `hello ${name}`;
```

### symbol
- Unique, immutable identifiers. Useful as object keys to avoid name collisions.

Example:
```js
const id = Symbol('id');
const obj = { [id]: 123 };
```

---

## Object types
- Objects (plain objects), arrays, functions, maps, sets, dates, regexps, etc.
- Compared by reference: two distinct objects with same shape are not `===`.

Examples:
```js
const a = { x: 1 };
const b = { x: 1 };
console.log(a === b); // false

const arr = [1,2,3];
console.log(Array.isArray(arr)); // true
```

Common object-like built-ins:
- `Array`, `Function`, `Date`, `RegExp`, `Map`, `Set`, `WeakMap`, `WeakSet`, `Promise`.

---

## Type checks and useful helpers
- `typeof` — quick type check for primitives and functions.
  - `typeof []` -> 'object'
  - `typeof function(){}` -> 'function'
  - `typeof null` -> 'object' (quirk!)

- `Array.isArray(value)` — reliable array test.
- `value instanceof Constructor` — checks prototype chain (works for objects created by that constructor).
- `Object.prototype.toString.call(value)` — robust type tag, e.g. `"[object Null]"`, `"[object Number]"`, `"[object Array]"`.

Examples:
```js
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(null); // "[object Null]"
```

---

## Equality: == vs ===
- `===` (strict equality) checks type and value. Prefer this normally.
- `==` performs type coercion (can be surprising).

Examples:
```js
0 == '0'; // true
0 === '0'; // false
null == undefined; // true
null === undefined; // false
```

Best practice: use `===` and explicit conversions when needed.

---

## Conversions and coercion
- Explicit conversions: `String(x)`, `Number(x)`, `Boolean(x)`, `BigInt(x)`.
- Implicit coercion occurs in operators and comparisons.

Examples:
```js
Boolean(''); // false
Number('123'); // 123
String(123); // '123'
```

Be careful with `+` because it also concatenates strings:
```js
'1' + 2; // '12'
1 + '2'; // '12'
1 - '2'; // -1 (number coercion)
```

---

## Reference vs value semantics
- Primitives copied by value. Mutation produces new values.
- Objects copied by reference. Mutating one reference affects all references.

Shallow vs deep copy:
- Shallow: `Object.assign({}, obj)` or spread `{ ...obj }`.
- Deep: use structured clone (`structuredClone()` in modern runtimes), `JSON.parse(JSON.stringify(obj))` (loses functions, `undefined`, `Symbol`, and special objects).

---

## Immutability and freezing
- `Object.freeze(obj)` prevents adding/removing/changing properties (shallow only).
- Libraries like Immer or using immutable patterns help manage immutable state.

---

## Small checklist / best practices
- Prefer `const` and `let` over `var`.
- Use `===` / `!==` for equality checks.
- Use `Array.isArray()` to detect arrays.
- Watch out for `typeof null === 'object'`.
- Use `Number.isNaN()` rather than global `isNaN()`.
- Avoid relying on implicit coercion — convert explicitly when clarity matters.

---

## Quick reference table
| Type | typeof | Example literal |
|------|--------|-----------------|
| Undefined | 'undefined' | `undefined` |
| Null | 'object' (quirk) | `null` |
| Boolean | 'boolean' | `true` |
| Number | 'number' | `123`, `NaN`, `Infinity` |
| BigInt | 'bigint' | `123n` |
| String | 'string' | `'abc'`, `"hi"` |
| Symbol | 'symbol' | `Symbol()` |
| Object | 'object' | `{}`, `[]`, `new Date()` |

---

## Further reading
- MDN JavaScript data types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
- ECMAScript specification (Types section)


*End of notes.*
