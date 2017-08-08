# Functions

## Overview
Functions are the single most important unit of code in JavaScript. From now on, almost all of the JavaScript code that we write will be enclosed in a function.

## Objectives
After this lesson, students should be able to

1. Explain what a function is and how it helps us organize and repeat code.
2. Recognize functions in the wild by looking for the invocation operator — `()`.
3. Declare a new function and describe its composition.
4. Use a `return` statement to exit a function and return a value.

## Snacks, snacks, snacks, snacks, snacks, snacks
Here at Flatbook HQ, we love our snacks.

![Snacks](https://user-images.githubusercontent.com/17556281/29367399-c110d938-826a-11e7-966e-5e07b46edb5e.gif)

In the olden days, anyone wanting a snack would have to stop working, get up from their desk, go downstairs to the bodega, walk around the store looking at all of the goodies, choose a snack, pay for it, and then head back upstairs to work. The system worked well enough, but it wasn't a very efficient way to snack — we were repeating the same set of actions again and _again_ and ***again***. And we ***hate*** repetitive work.

![Repetitive work](https://user-images.githubusercontent.com/17556281/29094521-981f28be-7c5b-11e7-91d3-8c3a7425e5a6.gif)

As programmers, we like to optimize everything about our workflow. Taking the occasional break from work and stretching our legs is always welcome, but going all the way downstairs to wait on a long line is a hassle we'd rather avoid.

Flatbook's top engineers huddled together to discuss the issue of snacking efficiency and came to a startling conclusion: machines are really, really good at doing repetitive tasks. Like, _made-for-this_ good. What if we could encapsulate some of the less desirable steps in the snacking process in a _subroutine_ of sorts — a process that a machine could take care of for us?

Like a bolt of lightning, it hit us all at once: we should invest in a ~conveyor belt of snacks~ vending machine!

![Vending machine](https://user-images.githubusercontent.com/17556281/29092277-d8e313ae-7c53-11e7-9ac7-27457854051d.gif)

Our new snacking flow looks like this:
- Get up from desk.
- Walk across room.
- Choose, pay for, and receive snack from vending machine.
- Walk back to desk.

By delegating a few of the more onerous tasks to our favorite new piece of hardware, we better organized the snacking process and made it much more easily repeatable. Previously, multiple snacks meant multiple trips down to the bodega, but now additional snacks are a mere button away!

![Multiple snacks](https://user-images.githubusercontent.com/17556281/29138524-fca93f02-7d11-11e7-88cd-f18412d38a95.gif)

## What is a function?
By encapsulating a set of instructions within an object — in our example, a vending machine — we effectively created a function. Instead of executing all of the old steps one-by-one every time we want a snack, we can use our vending machine function as a shorter, standardized way to achieve the same result.

That's all a function really is — an object that contains a sequence of actions (JavaScript statements) that we can execute.

## Built-in functions
In fact, we've already used a few functions built into JavaScript — we just didn't refer to them as such. `Math.random()`, `Number.parseInt()`, `console.log()`, and `alert()` are all examples of JavaScript functions. You've probably already identified the hallmark of a function — `()`, the invocation operator. We'll talk about that shortly, but let's first move beyond the built-in goodies and learn how to declare our own functions.

## Declaring a function
Declaring a function is the equivalent of designing the vending machine:
- Identifying how many inputs it should accept.
  + E.g., the snack selection and the amount of money inserted.
- Specifying what the output (the return value) should be.
  + E.g., the snack that (hopefully) pops out of the machine.
- Defining the logic that operates on the inputs and results in the output.
  + E.g., the program inside the vending machine that checks whether enough money was inserted, returns the correct amount of change, and initiates the process of dispensing the snack.

There are a few different ways to declare a new function in JavaScript, but the primary one is in a _function statement_ with the `function` keyword:
```js
function vendingMachine () {
  // Code to execute
}
// => undefined
```

When the JavaScript engine encounters the `function` keyword, it creates a new function object and stores the object in memory. We name the function (e.g., `vendingMachine` in the above example), following the same rules we learned for naming variables:
- Start with a letter.
- `useCamelCase` instead of `snake_case`.
- Keywords reserved by JavaScript are off-limits, so, for example, we can't create a function named `function`.

Beyond the `function` keyword and the name, there are two additional pieces of required syntax to remember:

### Parentheses — `( )`
The pair of parentheses following the name of the function contains a comma-separated list of _parameters_. These are placeholders for values that we pass into the function when we execute it:
```js
function vendingMachine (snackSelection, moneyInserted) {
  // Code to execute
}
// => undefined
```

***NOTE***: When we list the placeholders in a function declaration, they are called _parameters_, but the actual values passed to the function when it's invoked are called _arguments_.

### Curly braces — `{ }`
A pair of curly braces denotes the _function body_, the set of statements that are executed when we invoke the function:
```js
function vendingMachine () {
  // Function body starts here
  const snackCost = 100;
  const snackQuantity = 50;

  const totalValueOfInventory = snackCost * snackQuantity;
  // Function body ends here
}
// => undefined
```

The function body encapsulates everything that happens inside the function (or inside the vending machine). From the moment we invoke the function with the appropriate arguments (our snack selection and enough coins or bills) to when the function exits and returns a value (when our snack pops out of the machine), everything in between occurs in the function body.

## Invoking a function
Functions are JavaScript objects, but the key difference is that they are executable — they can be _invoked_. Just like addition, assignment, and comparison, there is an operator for invocation: the aptly-named _invocation operator_.

The invocation operator is a pair of parentheses immediately following the function name, like so:
```js
// Declaration
function vendingMachine () {
  // Code to execute
}
// => undefined

// Invocation
vendingMachine();
//            ^^ invocation operator
```

Arguments that are to be passed into a function are provided as a comma-separated list inside the invocation operator:
```js
function vendingMachine (snackSelection, moneyInserted) {
  // Code to execute
}
// => undefined

vendingMachine('Pretzels', 100);
// => undefined
```

## Function arguments
![Function argument](https://user-images.githubusercontent.com/17556281/29193369-05976a30-7df3-11e7-92e6-84148424aec6.gif)

Inside the function body, the passed-in arguments become local variables that are only available inside the function:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log('Snack selection:', snackSelection);
  console.log('Money provided:', moneyInserted);
}
// => undefined

vendingMachine('Pretzels', 100);
// LOG: Snack selection: Pretzels
// LOG: Money provided: 100
// => undefined

snackSelection;
// => Uncaught ReferenceError: snackSelection is not defined
```

Arguments are assigned to parameters in the order in which they're passed in:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log('Snack selection:', snackSelection);
  console.log('Money provided:', moneyInserted);
}
// => undefined

vendingMachine(100, 'Pretzels');
// LOG: Snack selection: 100
// LOG: Money provided: Pretzels
// => undefined
```

If fewer arguments are passed in than the number of parameters defined, all parameters that are not assigned an argument are initialized with a value of `undefined`:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log('Snack selection:', snackSelection);
  console.log('Money provided:', moneyInserted);
}
// => undefined

vendingMachine('Pretzels');
// LOG: Snack selection: Pretzels
// LOG: Money provided: undefined
// => undefined
```

The `moneyInserted` parameter is second in the list of parameters, but we only invoked the function with a single argument. That lone argument, `'Pretzels'` is assigned to the first parameter, `snackSelection`. There's no second argument to assign to `moneyInserted`, so it's initialized as `undefined`.

If more arguments are passed in than the function is expecting, additional arguments will not be assigned to local variables:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log('Snack selection:', snackSelection);
  console.log('Money provided:', moneyInserted);
}
// => undefined

vendingMachine('Pretzels', 100, 'Chips', 75);
// LOG: Snack selection: Pretzels
// LOG: Money provided: 100
// => undefined
```

The function still works perfectly fine, but `'Pretzels'` and `100` are the only arguments that get assigned to local variables.

## `return` statements
To this point, all of our functions have returned a value of `undefined` when invoked. When a function is invoked, it will **always** return a value. By default, that value is `undefined`, but we can specify a different value with a `return` statement:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log(`You selected ${snackSelection} and inserted ${moneyInserted}.`);

  return snackSelection;
}
// => undefined

vendingMachine('Pretzels', 100);
// LOG: You selected Pretzels and inserted 100.
// => "Pretzels"
```

We explicitly instructed the `vendingMachine()` function to return a string, so it no longer returns `undefined`.

***Top Tip***: Be careful where you put your `return` statements in relation to the other code in the function body. As soon as the JavaScript engine reaches a `return` statement, it exits the entire function, returning the specified value. Any lines of code after the triggered `return` statement will **not** execute:
```js
function vendingMachine (snackSelection, moneyInserted) {
  return snackSelection;

  console.log(`You selected ${snackSelection} and inserted ${moneyInserted}.`);
}
// => undefined

vendingMachine('Pretzels', 100);
// => "Pretzels"
```

The JavaScript engine exits after `return snackSelection;` and never makes it to the `console.log()` statement.

## Tying it all together
```js
function getPrice (snackSelection) {
  switch (snackSelection) {
    case 'Pretzels':
      return 100;
    case 'Chips':
      return 75;
    case 'Water':
      return 50;
    default:
      return null;
  }
}
// => undefined

function vendingMachine (snackSelection, moneyInserted) {
  if (!snackSelection || !moneyInserted) {
    console.log('Error — Please select a snack and insert payment.');

    return null;
  } else {
    // Invoking a function inside of another function
    const price = getPrice(snackSelection);

    if (!price) {
      console.log('Error — Please select a valid snack.');

      return null;
    } else {
      if (moneyInserted < price) {
        const remaining = price - moneyInserted;

        console.log(`Error — Please insert ${remaining} more to purchase ${snackSelection}.`);

        return null;
      } else {
        const change = moneyInserted - price;

        return `${snackSelection} dispensed. Your change is ${change}. Thank you!`;
      }
    }
  }
}
// => undefined

vendingMachine('Water', 100);
// => "Water dispensed. Your change is 50. Thank you!"

vendingMachine('Pretzels', 75);
// LOG: Error — Please insert 25 more to purchase Pretzels.
// => null

vendingMachine('Candy', 100);
// LOG: Error — Please select a valid snack.
// => null
```

And we're done!

![Break the vending machine](https://user-images.githubusercontent.com/17556281/29193398-142f4950-7df3-11e7-9083-8ee1ac8f8d0f.gif)

For now...

## Resources
- MDN
  + [Functions — reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
  + [Function return values](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)
  + [Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
