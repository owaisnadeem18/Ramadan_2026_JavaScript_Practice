// ********** Logical Questions in JavaScript (Mid Level Position Explanation)**********

// 1. Difference between var, let, and const in JavaScript:

// **“The main difference between var, let, and const is scope, hoisting behavior, and mutability.

// var is function-scoped, while let and const are block-scoped.

// All three are hoisted, but var is initialized with undefined, which allows access before declaration, whereas let and const are hoisted but remain in the Temporal Dead Zone until initialization. Accessing them before declaration throws a ReferenceError.

// var allows re-declaration and re-assignment, let allows re-assignment but not re-declaration, and const allows neither re-declaration nor re-assignment.

// However, const does not make values immutable — objects and arrays declared with const can still be mutated.

// In React, we avoid var due to scope issues and prefer const by default for state variables, props, and references, using let only when reassignment is required.”**

// 2. What is hoisting in JavaScript?
// Explain the difference between variable hoisting and function hoisting, with examples.

