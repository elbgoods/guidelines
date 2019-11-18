# PHP

All general PHP guidelines **MUST** be followed as long as not overridden by a more precise guideline scope.

## PSRs

### Namespaces and Autoloading

Namespaces, directories and autoloading **MUST** follow [PSR-4].

### Coding Style 

The PHP code style **MUST** follow [PSR-1], [PSR-2] & [PSR-12] - the higher PSR can override the lower ones.

## OOP

Every PHP code **SHOULD** be written in classes, traits, interfaces to be OOP compatible.

### SOLID code

Every PHP code **SHOULD** follow the [SOLID](https://en.wikipedia.org/wiki/SOLID) principle. You can read more about [from STUPID to SOLID code](https://williamdurand.fr/2013/07/30/from-stupid-to-solid-code/).

* **S**ingle Responsibility Principle
  > A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.
* **O**pen/Closed Principle
  > Software entities should be open for extension, but closed for modification.
* **L**iskov Substitution Principle
  > Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
* **I**nterface Segregation Principle
  > Many client-specific interfaces are better than one general-purpose interface.
* **D**ependency Inversion Principle
  > One should depend upon abstractions, not concretions.

### Types

Every method and function **SHOULD** be type-hinted as much as possible (arguments & return type). This way you **MUST** think twice about mixed types.

### Docblocks

You **MUST NOT** use docblocks for methods that can be fully type hinted (unless you need a description).

Only add a description when it provides more context than the method signature itself. Use full sentences for descriptions, including a period at the end.

## Conditions

### IF statements

You **MUST** use curly-brackets for `if` statements and **MUST NOT** use single line `if` statements.

```php
// Good
if ($condition) {
   // conditional code
}

// Bad
if ($condition) // conditional code
```

### early return

You **SHOULD** use early returns to prevent [complex condition](#complex-conditions) blocks and indentation.

### happy path

Following the [early return](#early-return) rule the happy path **SHOULD** be the last return and unindented.

```php
// Good
if (empty($value) {
    throw new Exception;
}

return $value;

// bad
if (! empty($value) {
    return $value;
}

throw new Exception;
```

### avoid else

Following the [early return](#early-return) rule you **SHOULD NOT** use/need an `else` block.

```php
// Good
if (empty($value) {
    throw new Exception;
}

return $value;

// bad
if (empty($value) {
    throw new Exception;
} else {
    return $value;
}
```

### complex conditions

You **SHOULD** use separated `if` statements instead of complex `&&` or `||` joined ones. This increases readability and separated error handling.

```php
// Good
if (empty($value)) {
   return;
}

if (! is_string($value)) {
   return;
}

if (strlen($value) >= 50) {
   return;
}

return $value;

// bad
if (! empty($value) && is_string($value) && strlen($value) < 50) {
    return $value;
}
```

### condition negation

You **SHOULD NOT** use negation if possible but the [early return](#early-return), [happy path](#happy-path) and [complex conditions](#complex-conditions) rules **MUST** be respected before.

```php
// good
if (is_null($index)) {
    return;
}

// bad
if (! is_null($index)) {
    return;
}
```

### indirect boolean casting

You **SHOULD NOT** use indirect boolean casting. Instead you **SHOULD** use comparison operators, `is_xyz()` functions or `bool_val()`.

```php
// good
function hasColor() {
    return is_string($this->color);
}

// bad
function hasColor() {
    return !!$this->color;
}
```

[PSR-1]: https://www.php-fig.org/psr/psr-1/
[PSR-2]: https://www.php-fig.org/psr/psr-2/
[PSR-4]: https://www.php-fig.org/psr/psr-4/
[PSR-12]: https://www.php-fig.org/psr/psr-12/