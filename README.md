# Functions

## Problem Statement 
Functions are the single most important unit of code in JavaScript. Much like a
`<div>` in HTML, functions serve as ways to enclose bits of Javascript code to
signify to other developers that this code all goes together. Functions allow us
to keep our code clean and [DRY][dry](<u>D</u>on't <u>R</u>epeat <u>Y</u>ourself), concepts that you'll learn a little bit
more about later. From now on, almost all of the JavaScript code that we write
will be enclosed in a function. 

## Objectives
1. Explain what a function is
2. Recognize functions by looking for the invocation operator — `()`
3. Declare a new function and describe its composition
4. Use a `return` statement to exit a function and return a value

## Explain what a function is and how it helps us organize and repeat code 
#### Snacks, snacks, snacks, snacks, snacks, snacks
Here at Flatbook HQ, we love our snacks.

<picture>
  <source srcset="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/snacks.webp" type="image/webp">
  <source srcset="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/snacks.gif" type="image/gif">
  <img src="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/snacks.gif" alt="Snacks!">
</picture>

In the olden days, we had a super inefficient method of snacking. Anyone wanting a snack would have to:
1. Go downstairs to the bodega.
2. Walk around the store looking at all of the goodies.
3. Choose a snack.
4. Take it up to the register.
5. Wait on line until it's our turn at the register.
6. Wait for the clerk to tell us our total.
7. Hand over some money.
8. Wait for the clerk to count the money, perform some quick math, open the cash drawer, deposit our money, and withdraw any change.
9. Wait for the clerk to hand the item and any change back to us.
10. Head back upstairs to work.

The system worked well enough, but it wasn't a very efficient way to snack — we
were repeating the same set of actions again and again and again. As
programmers, we like to optimize everything about our workflow. Taking the
occasional break from work and stretching our legs is always welcome, but there
are so many inefficiencies in our snacking method that would be great to
abstract away. Ten whole steps for a simple snack is a lot!

Flatbook's top engineers huddled together to discuss the issue of snacking
efficiency and came to a conclusion: machines are really, really good
at doing repetitive tasks. Like, _made-for-this_ good. We could
encapsulate some of the less desirable steps in the snacking process in a
a process that a machine could take care of for us.

Like a bolt of lightning, it hit us all at once: we should invest in a vending
machine!

<picture>
  <source srcset="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/vending_machine.webp" type="image/webp">
  <source srcset="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/vending_machine.gif" type="image/gif">
  <img src="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/vending_machine.gif" alt="Vending machine!">
</picture>

Let's go through the ten steps again and assess what the vending machine's
impact will be for each:
1. Nothing — breaks are great for productivity.
2. **Instead of having to walk all over the store, we're presented with all of the options in a single, easily digestible layout.**
3. Nothing — we still get to pick out our favorite snack.
4. **No more register! We simply make our selection on the keypad.**
5. **Potential for a shorter line! All the time saved by the vending machine means that there's probably a shorter wait to purchase snacks.**
6. **Every item in the vending machine has a visible price.**
7. Nothing — we just insert our money into the machine instead of handing it to the clerk.
8. **No more waiting for the clerk to calculate everything, and no more human error — machines are so good at math!**
9. Nothing — we pick up our item and change from the machine instead of having it handed to us.
10. Nothing.

Check it out, we made fully half the steps much more efficient! Our new snacking flow looks like this:
1. Walk over to the vending machine.
2. Make our selection.
3. Insert money.
4. Receive snack and change from the machine.
5. Walk back to desk.

By delegating a few of the more harder tasks to our favorite new piece of
hardware, we better simplified the snacking process and made it a little easier
on everyone. Previously, multiple snacks meant multiple trips down to the store,
but now additional snacks are a mere button away!

## Our vending machine in code
Let's represent our new snack flow as some JavaScript code. We'll create two
variables, one to represent the snack selection and the other for the amount of
money that was inserted (in cents):
```js
const snackSelection = 'Pretzels';

const moneyInserted = 100;
```

Next, let's add a control flow that has a different case for each potential
snack the user could select:
```js
switch (snackSelection) {
  case 'Pretzels':
    // Vend pretzels if enough money was inserted.
    break;

  case 'Chips':
    // Vend chips if enough money was inserted.
    break;

  case 'Water':
    // Vend water if enough money was inserted.
    break;

  default:
    // Handle bad input if the user asks for something other than pretzels, chips, or water.
    break;
}
```

If the user makes an invalid selection, print out a message alerting them of the
error:
```js
switch (snackSelection) {
  case 'Pretzels':
    // Vend pretzels if enough money was inserted.
    break;

  case 'Chips':
    // Vend chips if enough money was inserted.
    break;

  case 'Water':
    // Vend water if enough money was inserted.
    break;

  default:
    console.error('Please select a valid snack.');

    break;
}
```

Inside each of those `case`s, we'll have to add some checks to make sure the
user inserted enough money:
```js
switch (snackSelection) {
  case 'Pretzels':
    if (moneyInserted >= 100) {
      // Calculate change.

      // Return snack and change to user.
    }

    break;

  case 'Chips':
    if (moneyInserted >= 75) {
      // Calculate change.

      // Return snack and change to user.
    }

    break;

  case 'Water':
    if (moneyInserted >= 50) {
      // Calculate change.

      // Return snack and change to user.
    }

    break;

  default:
    console.error('Please select a valid snack.');

    break;
}
```

If they inserted enough money, calculate the change, and print out a message
confirming the successful transaction:
```js
switch (snackSelection) {
  case 'Pretzels':
    if (moneyInserted >= 100) {
      const change = moneyInserted - 100;

      console.log(`${snackSelection} dispensed. Your change is ${change}. Thank you!`);
    }

    break;

  case 'Chips':
    if (moneyInserted >= 75) {
      const change = moneyInserted - 75;

      console.log(`${snackSelection} dispensed. Your change is ${change}. Thank you!`);
    }

    break;

  case 'Water':
    if (moneyInserted >= 50) {
      const change = moneyInserted - 50;

      console.log(`${snackSelection} dispensed. Your change is ${change}. Thank you!`);
    }

    break;

  default:
    console.error('Please select a valid snack.');

    break;
}
```

If they didn't insert enough money, print out a message instructing them to
insert more money:
```js
switch (snackSelection) {
  case 'Pretzels':
    if (moneyInserted >= 100) {
      const change = moneyInserted - 100;

      console.log(`${snackSelection} dispensed. Your change is ${change}. Thank you!`);
    } else {
      console.error(`Please insert more to purchase ${snackSelection}.`);
    }

    break;

  case 'Chips':
    if (moneyInserted >= 75) {
      const change = moneyInserted - 75;

      console.log(`${snackSelection} dispensed. Your change is ${change}. Thank you!`);
    } else {
      console.error(`Please insert more to purchase ${snackSelection}.`);
    }

    break;

  case 'Water':
    if (moneyInserted >= 50) {
      const change = moneyInserted - 50;

      console.log(`${snackSelection} dispensed. Your change is ${change}. Thank you!`);
    } else {
      console.error(`Please insert more to purchase ${snackSelection}.`);
    }

    break;

  default:
    console.error('Please select a valid snack.');

    break;
}
```

Test that out in your browser's JS console to make sure everything's working
correctly. Don't get too attached to it, though, because the code looks like a
bit of a mess. Multiple nested statements like these are one of the most
problematic structures in programming. Among the many problems with this
approach, there are two major concerns:
1. The `case`s in our `switch` statement are responsible for too much logic:
if the snack selection is valid, if enough money was inserted, how
much change is due, etc. Those are all separate pieces of logic that are
currently nested together, living in the same place.
2. If you tested the code in your browser, you probably noticed something
annoying: our current implementation as a giant `switch` statement is
can only be used once. If we want to run the code with a different choice, we
need to copy and paste the entire `switch` statement all over again. Each time we want to get another snack, we need to have another copy of the entire program! That doesn't sound clean or dry. 

When you write your code the first time, you just want it to work. It doesn't
matter how ugly or slow it is, as long as it gets the job done. Ideally, by the
end of our development process, our code should be composed of a series of
small, well-scoped, self-contained functions that each perform a single task. We
should have one function that checks if the snack selection is valid; one that
checks if enough money was inserted; one that calculates change due; and one
that dispenses the item and any change to the user. Writing code like this makes
it much easier to test each section of code and debug any errors that we
encounter. If everything's together in a single, massive block, we have to comb
through the entire program hunting for an issue. If we have different functions,
each with their own responsibility, we can narrow down our troubleshooting to
the specific area that's failing and ignore the rest of the code. This way of
writing functions is commonly referred to as the single responsibility
principle.

Remember, we want to make our code as clean and [DRY][dry] as possible. If, in order to run the same
sequence of actions a second time, we need a second copy of the exact same lines
of code, we've found an opportunity to refactor. Remember, computers are
designed to repeat actions as many times as humans need them to!

#### What is a function?
**A function is an object that contains a sequence of actions (JavaScript
statements) that we can execute whenever we want and however many times we
want**. A function can accept a number of inputs, perform some internal
actions that are hidden from the world outside of the function, and then
return a value back to that outer environment.

In our snacking example of the store vs. the vending machine, the vending
machine operates as a function. It takes a lot of the tasks that we were doing
manually and hides them away, letting a computer handle the things that a
computer is good at. We don't care what happens inside the vending machine; we
just know that, if we provide it some inputs (a snack selection and some money),
it will take care of the rest and return to us some output (either a snack or an
error message). Instead of executing all of the old steps one at a time every time
we want a snack, we can use the vending machine as a shorter, standardized way
to achieve the same result.

However, we missed the mark when we translated our vending machine into code.
Our coded vending machine is a sequence of JavaScript statements, but it's not
as efficient as the actual machine. We have to run our vending machine
immediately when we paste our code in the console. We also can't run it multiple
times without copying and pasting the entire thing multiple times.

Let's start over, this time creating a better JavaScript function.

## Recognize Functions by Looking for the Invocation Operator — `()`
We've already used a few functions built into JavaScript — we just didn't refer
to them as such. `Math.random()`, `Number.parseInt()`, `console.log()`, and
`alert()` are all examples of JavaScript functions. You've probably already
identified the signature of a function — `()`, the invocation operator. We'll
talk about that shortly, but let's learn how to declare our own functions.

## Declare a New Function and Describe Its Composition
Declaring a function is the equivalent of designing the vending machine:
- Identifying how many inputs it should accept.
  + E.g., the snack selection and the amount of money inserted.
- Specifying what the output (the return value) should be.
  + E.g., the snack that (hopefully) pops out of the machine.
- Defining the logic that operates on the inputs and results in the output.
  + E.g., the program inside the vending machine that checks whether enough money was inserted, returns the correct amount of change, and initiates the process of dispensing the snack.

There are a few different ways to declare a new function in JavaScript, but the
one that you will use most often is a _function statement_ with the `function`
keyword:
```js
function vendingMachine () {
  // Code to execute
}
```

When the JavaScript engine encounters the `function` keyword, it creates a new
function object and stores the object in memory. We give the function a name (e.g.,
`vendingMachine` in the above example), following the same rules we learned for
naming variables:
- Start with a letter.
- `useCamelCase` instead of `snake_case`.
- Keywords reserved by JavaScript are off-limits, so, for example, we can't create a function named `function`.

Beyond the `function` keyword and the name, there are two additional pieces of
required syntax to remember:

#### Parentheses — `( )`
The pair of parentheses following the name of the function contains a
comma-separated list of _parameters_. These are placeholders for values that we
pass into the function when we execute it:
```js
function vendingMachine (snackSelection, moneyInserted) {
  // Code to execute
}
```

***NOTE***: When we list the placeholders in a function declaration, they are called
_parameters_, but the actual values passed to the function when it's invoked are
called _arguments_. However, you'll often hear them used interchangeably. These
parentheses are used whether you are passing in arguments or not.

#### Curly braces — `{ }`
A pair of curly braces denotes the _function body_, the code that
is executed when we invoke the function. It should look very familiar from the
lesson on conditional statements — it's just a code block!

```js
function vendingMachine (snackSelection, moneyInserted) {
  // Function body starts here
  if (moneyInserted >= 1000) {
    console.log("Wow, that's a lot of money!");
  } else {
    console.error("Hm, that's a decent amount of money.");
  }
  // Function body ends here
}
```

The function body contains everything that happens inside the function (or
inside the vending machine). From the moment we call the function with the
appropriate arguments (our snack selection and enough money) to when
the function exits and returns a value (when our snack pops out of the machine),
everything in between occurs in the function body.

#### Invoking a Function
Functions are JavaScript objects, but the key difference is that they are
executable — they can be _invoked_. Just like addition, assignment, and
comparison, there is an operator for invocation: the aptly-named _invocation
operator_. 

The invocation operator is a pair of parentheses immediately following the
function name, like so:
```js
// Declaration
function vendingMachine () {
  // Code to execute
}

// Invocation
vendingMachine();
//            ^^ invocation operator
```

Arguments that are to be passed into a function are provided as a
comma-separated list inside the invocation operator:
```js
function vendingMachine (snackSelection, moneyInserted) {
  // Code to execute
}

vendingMachine('Pretzels', 100);
```

#### Function Arguments

Inside the function body, the passed-in arguments become local variables that
are _only available inside the function_:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log('Snack selection:', snackSelection);
  console.log('Money provided:', moneyInserted);
}

vendingMachine('Pretzels', 100);
// LOG: Snack selection: Pretzels
// LOG: Money provided: 100
// => undefined

snackSelection;
// => Uncaught ReferenceError: snackSelection is not defined
```

Arguments are assigned to parameters in the order in which they're passed in. In
the following snippet, notice that `100` is passed into the `snackSelection`
parameter and `'Pretzels'` is passed into the `moneyInserted` slot:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log('Snack selection:', snackSelection);
  console.log('Money provided:', moneyInserted);
}

vendingMachine(100, 'Pretzels');
// LOG: Snack selection: 100
// LOG: Money provided: Pretzels
// => undefined
```

If fewer arguments are passed in than the number of parameters defined, all
parameters that are not assigned an argument are initialized with a value of
`undefined`:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log('Snack selection:', snackSelection);
  console.log('Money provided:', moneyInserted);
}

vendingMachine('Pretzels');
// LOG: Snack selection: Pretzels
// LOG: Money provided: undefined
// => undefined
```

The `moneyInserted` parameter is second in the list of parameters, but we only
invoked the function with a single argument. That lone argument, `'Pretzels'` is
assigned to the first parameter, `snackSelection`. There's no second argument to
assign to `moneyInserted`, so it's initialized as `undefined`.

If more arguments are passed in than the function is expecting, additional
arguments will not be assigned to local variables:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log('Snack selection:', snackSelection);
  console.log('Money provided:', moneyInserted);
}

vendingMachine('Pretzels', 100, 'Chips', 75);
// LOG: Snack selection: Pretzels
// LOG: Money provided: 100
// => undefined
```

The function still works perfectly fine, but `'Pretzels'` and `100` are the only
arguments that get assigned to local variables.

## Use a `return` Statement to Exit a Function and Return a Value
To this point, all of our functions have returned a value of `undefined` when
invoked. When a function is invoked, it will **always** return a value. By
default, that value is `undefined`, but we can specify a different value with a
`return` statement:
```js
function vendingMachine (snackSelection, moneyInserted) {
  console.log(`You selected ${snackSelection} and inserted ${moneyInserted}.`);

  return snackSelection;
}

vendingMachine('Pretzels', 100);
// LOG: You selected Pretzels and inserted 100.
// => "Pretzels"
```

We explicitly instructed the `vendingMachine()` function to return the value
stored in `snackSelection`. Essentially, **when we `return` something from a
function, we're taking that value from inside the function and making it
available to the world outside of the function**. One common way to handle a
value returned by a function is to simply store the returned value in a variable
that can then be referenced and operated upon:
```js
function multiplyByTwo (num) {
  return num * 2;
}

function multiplyByThree (num) {
  return num * 3;
}

const firstNum = multiplyByTwo(5);

const secondNum = multiplyByThree(firstNum);

firstNum;
// => 10

secondNum;
// => 30
```

***Top Tip***: Be careful where you put your `return` statements in relation to the other code
in the function body. As soon as the JavaScript engine reaches a `return`
statement, it exits the entire function, returning the specified value. Any
lines of code after the triggered `return` statement will *not* execute:
```js
function vendingMachine (snackSelection, moneyInserted) {
  return snackSelection;

  console.log(`You selected ${snackSelection} and inserted ${moneyInserted}.`);
}

vendingMachine('Pretzels', 100);
// => "Pretzels"
```

The JavaScript engine exits after `return snackSelection;` and never makes it to
the `console.log()` statement.

#### Refactoring Into a Function
Let's take our massive, `switch` statement-powered vending machine code and wrap
it in a function, making it easy to run again and again without repeating the
entire `switch` statement:
```js
function vendingMachine (snackSelection, moneyInserted) {
  switch (snackSelection) {
    case 'Pretzels':
      if (moneyInserted >= 100) {
        const change = moneyInserted - 100;

        console.log(`${snackSelection} dispensed. Your change is ${change}. Thank you!`);
      } else {
        console.error(`Please insert more to purchase ${snackSelection}.`);
      }

      break;

    case 'Chips':
      if (moneyInserted >= 75) {
        const change = moneyInserted - 75;

        console.log(`${snackSelection} dispensed. Your change is ${change}. Thank you!`);
      } else {
        console.error(`Please insert more to purchase ${snackSelection}.`);
      }

      break;

    case 'Water':
      if (moneyInserted >= 50) {
        const change = moneyInserted - 50;

        console.log(`${snackSelection} dispensed. Your change is ${change}. Thank you!`);
      } else {
        console.error(`Please insert more to purchase ${snackSelection}.`);
      }

      break;

    default:
      console.error('Please select a valid snack.');

      break;
  }
}
```

We can now invoke it multiple times without copying and pasting the entire
`switch` statement again for each run:
```js
vendingMachine('Pretzels', 500);
// LOG: Pretzels dispensed. Your change is 400. Thank you!
// => undefined

vendingMachine('Ice cream', 100);
// ERROR: Please select a valid snack.
// => undefined

vendingMachine('Water', 25);
// ERROR: Please insert more to purchase Water.
// => undefined
```

Cool! However, after each run, the resulting message is printed out to the
console (via `console.log()` or `console.error()`), and then it disappears. We
have no way of storing those messages for later use. Let's slightly modify our
function so that it `return`s the messages instead of printing them to the
console:
```js
function vendingMachine (snackSelection, moneyInserted) {
  switch (snackSelection) {
    case 'Pretzels':
      if (moneyInserted >= 100) {
        const change = moneyInserted - 100;

        return `${snackSelection} dispensed. Your change is ${change}. Thank you!`;
      } else {
        return `Please insert more to purchase ${snackSelection}.`;
      }

    case 'Chips':
      if (moneyInserted >= 75) {
        const change = moneyInserted - 75;

        return `${snackSelection} dispensed. Your change is ${change}. Thank you!`;
      } else {
        return `Please insert more to purchase ${snackSelection}.`;
      }

    case 'Water':
      if (moneyInserted >= 50) {
        const change = moneyInserted - 50;

        return `${snackSelection} dispensed. Your change is ${change}. Thank you!`;
      } else {
        return `Please insert more to purchase ${snackSelection}.`;
      }

    default:
      return 'Please select a valid snack.';
  }
}
```

Notice that we were also able to remove the `break` statements since the
function will exit upon hitting any of our `return`s.

Let's make sure it's working as expected. We'll store the output of each
invocation — the function's return value — in a variable that we can then access
at any point:
```js
const firstMessage = vendingMachine('Pretzels', 500);

const secondMessage = vendingMachine('Ice cream', 100);

const thirdMessage = vendingMachine('Water', 25);

firstMessage;
// => "Pretzels dispensed. Your change is 400. Thank you!"

secondMessage;
// => "Please select a valid snack."

thirdMessage;
// => "Please insert more to purchase Water."
```

It's working perfectly! Time to wrap up here and head home, right?

Right?!

<picture>
  <source srcset="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/wrong.webp" type="image/webp">
  <source srcset="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/wrong.gif" type="image/gif">
  <img src="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/wrong.gif" alt="Wrong wrong wrong wrong.">
</picture>

#### Refactoring into many functions
Our function, while now wonderfully reusable, is still large. Remember, each function should have one responsibility, and
ours currently has at least five: checking whether the snack selection is valid;
getting the price of the snack selection; checking whether enough money was
inserted; calculating the amount of change; constructing and returning the
appropriate message after the transaction is complete.

This isn't ideal for a number of reasons, the main one being that it's quite
difficult to follow! We probably understand it right now, but imagine another
developer, or your future self, trying to understand it six months from now.
It's also difficult to debug, as there are 5 different thing happening in one
function. If there's an error in the code that checks the amount of money
inserted, it might not show up until the function returns its final message. If
we had several smaller functions, it would be both easier to understand, and
easier to debug.

Last, but not least, there is a lot of repeated code within our current
`vendingMachine()` function. Remember, we want our code to be as [DRY][dry] as
possible, and this is not. Every single `case` has the exact same structure; the
only differences are the name and cost of the snack. Let's start cleaning up our
code a bit, and remove some pieces of logic into separate functions.

#### `validateSelection()`
For our first reorganization, we're going to extract the logic that's handled by
the `default` in our massive `switch` statement. Currently, if an invalid
selection is made, none of the `case`s in the `switch` will match. We'll
eventually end up in the `default`, which then returns the string `'Please
select a valid snack.'`. Instead, let's create a new function with a single
responsibility — checking if the selection is valid:
```js
function validateSelection (selection) {
  switch (selection) {
    case 'Pretzels':
    case 'Chips':
    case 'Water':
      return true;
    default:
      return false;
  }
}

function vendingMachine (snackSelection, moneyInserted) {
  if (validateSelection(snackSelection) === false) {
    return 'Please select a valid snack.';
  }

  switch (snackSelection) {
    case 'Pretzels':
      // Code unchanged

    case 'Chips':
      // Code unchanged

    case 'Water':
      // Code unchanged
  }
}
```

We removed the `default` case from `vendingMachine()`. In its place, we added a
guard at the top of the function that exits immediately if the `snackSelection`
is invalid, avoiding the expense of having to enter the `switch` statement. If
the selection is valid, `validateSelection()` returns `true`. If the selection
is invalid, `validateSelection()` returns `false`. This change *added* a bit
more code, but that's outweighed by the benefits:
- We cleaned up our main function, `vendingMachine()`, a bit.
- We extracted the logic of checking the validity of the user's selection into its
own function. That logic can now be tested and debugged by itself.

#### `getPrice()`
Next up, let's extract the price of each item out of our `vendingMachine()` function:
```js
function validateSelection (selection) {
  // Code unchanged
}

function getPrice (selection) {
  switch (selection) {
    case 'Pretzels':
      return 100;
    case 'Chips':
      return 75;
    case 'Water':
      return 50;
  }
}
```

Our new `getPrice()` function accepts one argument, `selection`, and uses a
`switch` statement to determine the price of the requested snack. Notice that we
don't need a `default` statement to catch invalid snack selections because our
shiny new `validateSelection()` function takes care of that for us. The return
value of `getPrice()` is the price of the selected snack.

Doing so means that we can drastically simplify our huge, nested `switch`
statement in the main function into this:
```js
function vendingMachine (snackSelection, moneyInserted) {
  if (validateSelection(snackSelection) === false) {
    return 'Please select a valid snack.';
  }

  const price = getPrice(snackSelection);

  if (price > moneyInserted) {
    return `Please insert more to purchase ${snackSelection}.`;
  }

  const change = moneyInserted - price;

  return `${snackSelection} dispensed. Your change is ${change}. Thank you!`;
}
```

If the selection isn't valid, `return` immediately with a failure message.
Otherwise, invoke the `getPrice()` function and store the returned number in the
`price` variable. Then, if the `price` is higher than the amount of
`moneyInserted`, `return` with a failure message. Otherwise, calculate the
change, and then `return` a success message.

We could continue to refactor this into smaller pieces, but this is already a
great start. There's not much need to break it down further. It's already in a
few more manageable pieces than we started out with, and it is possible to write
code that's too small. For example, we could have extracted the calculation of
`change` into its own function:
```js
function calculateChange (inserted, price) {
  return inserted - price;
}
```

While that is technically isolating a self-contained piece of logic in its own
function, it feels like overkill. The key thing to remember and prioritize above
all else is readability. If your code is readable enough that an unfamiliar
programmer can look at it and quickly discern how it works, you've done a great
job. This is a judgement call on your part as a developer, and something you
will get better at feeling out over time.

## Conclusion 
If you haven't been coding along up to this point, take a moment to recreate
these functions in your browser's JavaScript console. Play around with them.
Make some modifications: rename variables and arguments, switch the ordering of
statements, and generally mess around with anything that you're finding a bit
difficult to understand at this point. There is a `vendingMachine.js` file
associated with this lesson - try playing around with the order of the functions
too. Break things, and then try to figure out what broke and why (and how you
could fix it). If you want to start fresh at any point, simply refresh the page
on which you have the JS console open, and everything will be reset.

That's all, folks!

<picture>
  <source srcset="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/smash_the_vending_machine.webp" type="image/webp">
  <source srcset="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/smash_the_vending_machine.gif" type="image/gif">
  <img src="https://curriculum-content.s3.amazonaws.com/web-development/js/basics/functions-readme/smash_the_vending_machine.gif" alt="Smash the vending machine!">
</picture>

For now...

## Resources
- MDN
  + [Functions — reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
  + [Function return values](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)
  + [Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

[dry]: https://en.wikipedia.org/wiki/Don't_repeat_yourself
