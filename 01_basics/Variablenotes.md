# JavaScript Data Types Overview

JavaScript features **8 Primitive Data Types** and **1 Complex (Non-Primitive) Data Type**.

---

## 1. Primitive Data Types

Primitive values are immutable (cannot be altered once created) and passed by value.

* **`String`**: Textual data enclosed in single (`'`), double (`"`), or template backticks (``` `` ```).
  ```javascript
  let name = "Alice";
  ```

* **`Number`**: Represents both integer and floating-point numbers (up to $2^{53} - 1$).
  ```javascript
  let age = 25;
  let price = 19.99;
  ```

* **`BigInt`**: Represents integers of arbitrary precision beyond the standard `Number` limit.
  ```javascript
  let hugeNumber = 9007199254740991n;
  ```

* **`Boolean`**: Logical value representing `true` or `false`.
  ```javascript
  let isLoggedIn = true;
  ```

* **`Undefined`**: Automatically assigned to a variable that has been declared but not initialized.
  ```javascript
  let status; // status is undefined
  ```

* **`Null`**: Represents an intentional absence of any object value.
  ```javascript
  let user = null;
  ```

* **`Symbol`**: Unique and immutable primitive value, often used as anonymous or private object keys.
  ```javascript
  let id = Symbol("id");
  ```

---

## 2. Complex / Non-Primitive Data Type

Non-primitive values are mutable and passed by reference.

* **`Object`**: Used to store key-value collections and complex entities. Arrays, functions, dates, and maps are all specialized objects under the hood.
  ```javascript
  let person = { name: "Alice", age: 25 };
  let colors = ["red", "green", "blue"]; // Array (a specialized Object)
  ```

---

## Checking Data Types

Use the `typeof` operator to check the data type of a variable:

```javascript
typeof "Hello"   // "string"
typeof 42        // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof 10n       // "bigint"
typeof Symbol()  // "symbol"
typeof {}        // "object"
typeof null      // "object" (a well-known historical bug in JavaScript)
```