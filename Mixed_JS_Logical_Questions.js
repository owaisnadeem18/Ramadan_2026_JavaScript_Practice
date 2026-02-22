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

// Hoisting is JavaScript’s behavior of allocating memory for variables and functions during the creation phase of the execution context before the code is executed.

// 🔹 Variable Hoisting vs Function Hoisting (Short & Clear)
// ✅ Variable Hoisting

// var → hoisted and initialized with undefined

// let / const → hoisted but kept in Temporal Dead Zone (TDZ)

// Examples: 

// 1. 
// console.log(a); // undefined
// var a = 10;

// // 2. 
// console.log(b)
// let b = 20;
// ReferenceError: Cannot access 'b' before initialization

// ✅ Function Hoisting:

// Function declarations are fully hoisted

// Function expressions behave like variables

// 🔹 Example (Normal Function Expression)
// const greet = function () {
//   console.log("Hello");
// };

// greet(); // ✅ works

// 🔹 Function Declaration vs Function Expression (Clear Difference)

// ✅ Function Declaration

// sayHi();

// function sayHi() {
//   console.log("Hi");
// }

// ✔ Fully hoisted
// ✔ Call before definition allowed

// ❌ Function Expression
// sayHi(); // ❌ Error

// const sayHi = function () {
//   console.log("Hi");
// };

// ❌ Not hoisted like declarations
// ❌ Variable rules apply (let / const / var)

// Summary: 
// If a function is assigned to a variable, it is called a function expression, and it follows variable hoisting rules rather than function hoisting. This means that if you try to call a function expression before it is defined, you will get an error, whereas with a function declaration, you can call it before its definition due to hoisting.

// 🧠 IIFE (Immediately Invoked Function Expression):

// An IIFE is a function that is defined and executed immediately after its creation.
// It does not need to be called separately , it runs automatically.

// examples of IIFE:

(function sayHi() {
    console.log("Hello")
}());

(function SayHelloToPerson (name) {
    console.log(`Hello ${name}`)
}("Owais"))

