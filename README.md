# JavaScript 'this' Keyword Behavior
This example demonstrates the sometimes-unintuitive behavior of the `this` keyword in JavaScript, particularly the differences between strict and non-strict mode and how the context of function invocation affects `this`.

The `bug.js` file contains a function `myFunc` that logs the value of `this`. Calling `myFunc` directly results in different outputs depending on the execution context (strict vs non-strict mode). Calling `myFunc` as a method of an object (`obj.myFunc()`) changes the value of `this` again.  The `bugSolution.js` file offers improved clarity and predictability of 'this' using arrow functions or explicit binding techniques.

## How to Reproduce
1. Open `bug.js`.
2. Run it using Node.js or a browser's JavaScript console.
3. Observe the differences in the output.
4. Compare with the corrected version in `bugSolution.js`.