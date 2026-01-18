# Postfix and Prefix Operations

## Prefix (Pre-increment/Pre-decrement)
- The operator is placed **before** the operand.
- Example: `++a` or `--a`
- The value is **incremented/decremented first**, then used in the expression.

```javascript
let a = 5;
let b = ++a; // a becomes 6, b is assigned 6
```

## Postfix (Post-increment/Post-decrement)
- The operator is placed **after** the operand.
- Example: `a++` or `a--`
- The value is **used in the expression first**, then incremented/decremented.

```javascript
let a = 5;
let b = a++; // b is assigned 5, then a becomes 6
```

## Summary Table

| Operation | Expression | Value Used | Value After |
|-----------|------------|------------|-------------|
| Prefix    | `++a`      | 6          | 6           |
| Postfix   | `a++`      | 5          | 6           |

## Usage Example

```javascript
let x = 10;
console.log(++x); // prints 11
console.log(x++); // prints 11, then x becomes 12
```