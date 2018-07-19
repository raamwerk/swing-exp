# swing-exp

An alternative for the switch statement that can be used expressively. Can only be used to match Strings. Other values will be converted to String.

The swing function always takes two arguments:
- The value to be matched
- An object defining the cases

```javascript
const swing = require('swing-exp')
const value = 'foo'

console.log(swing(value, {
  foo: 'Hello',
  bar: 'Goodbye'
}))

// => Hello
```

Define a default case to use when there's no match:

```javascript
const swing = require('swing-exp')
const value = 'foo'

console.log(swing(value, {
  bar: 'Hello',
  baz: 'Goodbye',
  default: 'Pineapple'
}))

// => Pineapple
```

Execute (blocks of) statements by providing case methods and calling the return value:

```javascript
const swing = require('swing-exp')
const value = 'foo'

swing(value, {
  foo () {
    const greeting = 'Hello'
    console.log(greeting)
  },
  bar () {
    console.log('Goodbye')
  }
})() // note the parentheses

// => Hello
```
