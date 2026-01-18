# The `process` Object in Node.js

The `process` object in Node.js is a global object that provides information about, and control over, the current Node.js process. It is an instance of the `EventEmitter` class and can be accessed without requiring any module.

## Key Features of the `process` Object
1. **Global Access**: The `process` object is available globally, so you don't need to import or require it.
2. **Interacts with the Environment**: It allows interaction with the operating system, environment variables, and the Node.js runtime.
3. **Event-Driven**: It emits events like `exit`, `uncaughtException`, and `SIGINT`.

---

## Commonly Used Methods and Properties of `process`

### 1. `process.stdout.write()`
- Writes data directly to the standard output (console) without adding a newline.
- Example:
  ```javascript
  process.stdout.write('Hello, ');
  process.stdout.write('World!');
  // Output: Hello, World!
  ```

### 2. `process.stdin`
- Represents the standard input stream, used to read input from the user.
- Example:
  ```javascript
  process.stdin.on('data', (data) => {
      console.log(`You entered: ${data}`);
  });
  ```

### 3. `process.argv`
- Contains an array of command-line arguments passed when the Node.js process was started.
- Example:
  ```javascript
  console.log(process.argv);
  // If run as `node app.js arg1 arg2`, output: [ 'node', 'app.js', 'arg1', 'arg2' ]
  ```

### 4. `process.env`
- Provides access to environment variables.
- Example:
  ```javascript
  console.log(process.env.PATH);
  ```

### 5. `process.exit()`
- Exits the current Node.js process with a specified exit code.
- Example:
  ```javascript
  process.exit(1); // Exit with code 1 (indicates an error)
  ```

### 6. `process.cwd()`
- Returns the current working directory of the Node.js process.
- Example:
  ```javascript
  console.log(process.cwd());
  ```

### 7. `process.memoryUsage()`
- Returns an object describing the memory usage of the Node.js process.
- Example:
  ```javascript
  console.log(process.memoryUsage());
  ```

### 8. `process.nextTick()`
- Schedules a callback function to be executed in the next iteration of the event loop.
- Example:
  ```javascript
  process.nextTick(() => {
      console.log('This will run after the current operation.');
  });
  ```

---

## Events in the `process` Object
The `process` object emits several events, such as:
- **`exit`**: Triggered when the process is about to exit.
- **`uncaughtException`**: Triggered when an exception is not caught.
- **`SIGINT`**: Triggered when the process receives a `SIGINT` signal (e.g., pressing `Ctrl+C`).

Example of handling the `exit` event:
```javascript
process.on('exit', (code) => {
    console.log(`Process exited with code: ${code}`);
});
```

---

## Summary
The `process` object is a powerful tool in Node.js for interacting with the runtime environment. It provides methods for input/output, managing environment variables, handling events, and more. In your code, `process.stdout.write()` is used to print inline output, which is particularly useful for patterns or progress indicators.

---

# Symmetrical Pyramid Pattern

To print a symmetrical pyramid where the number of stars increases by two in each row, you can use the following algorithm:

## Algorithm:
1. **Outer Loop**: Iterate through the rows of the pyramid.
2. **Spaces**: For each row, calculate the number of spaces needed to center the stars. This is determined by the total rows minus the current row index.
3. **Stars**: For each row, calculate the number of stars. The number of stars in row `i` is `2 * i + 1`.
4. **Print**: Print the spaces first, followed by the stars, and move to the next line.

## Pseudocode:
```
for i from 0 to n-1:
    print (n - i - 1) spaces
    print (2 * i + 1) stars
    move to the next line
```

## Example in JavaScript:
```javascript
function printSymmetricalPyramid(n) {
  for (let i = 0; i < n; i++) {
    // Print spaces
    process.stdout.write(' '.repeat(n - i - 1));
    // Print stars
    process.stdout.write('*'.repeat(2 * i + 1));
    // Move to the next line
    process.stdout.write('\n');
  }
}

printSymmetricalPyramid(5);
```

## Explanation:
- For `n = 5`, the output will be:
```
    *
   ***
  *****
 *******
*********
```
- **Spaces**: The number of spaces decreases as the row index increases.
- **Stars**: The number of stars increases by 2 for each subsequent row.

This algorithm ensures the pyramid is symmetrical and the stars increase by two in each row.