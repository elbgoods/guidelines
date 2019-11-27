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
You **SHOULD** only add a description when it provides more context than the method signature itself. 
You **MUST** use full sentences for descriptions, including a period at the end.

## Helpers

Helpers are files with global functions not wrapped inside a class.

* You **MUST** reduce the amount of helper files to an absolute minimum - in best case a single one or none.
* Helper functions **MUST** wrap an already available method and **MUST NOT** introduce new logic.

## Naming

* You **MUST NOT** use a prefix to indicate it's visibility.
* You **MUST NOT** use a prefix to indicate it's type.

### Namespaces

* You **MUST** use `UpperCamelCase` for namespaces.
* You **MUST** use namespaces for multiple classes instead of a prefix.
  * `\AdminUsersController` => `\Admin\UsersController`
* You **MUST** use the namespace as directory path.

### Classes

* You **MUST** use `UpperCamelCase` for class names.
* You **MUST** use the class name as file name.
* You **SHOULD** use a suffix even if it's already part of the namespace.
  * `\Contracts\User` => `\Contracts\UserContract`
  
### Properties

* You **MUST** use `$lowerCamelCase` for property names.

### Methods

* You **MUST** use `lowerCamelCase()` for method names.
* You **MUST** prefix methods with `bool` return by `is` or `has`.
* You **MUST** prefix getter/accessor methods by `get`.
* You **MUST** prefix setter/mutator methods by `set`.

### Functions

* You **MUST** use `lower_snake_case()` for function names.
* You **MUST** prefix methods with `bool` return by `is_` or `has_`.

### Variables

* You **MUST** use `$lowerCamelCase` for variable names.

### Array Keys

* You **MUST** use `lower_snake_case` for array keys as long as not **REQUIRED** different by a foreign package or API.

## Conditions

### IF statements

You **MUST** use curly-brackets for `if` statements and **MUST NOT** use single line `if` statements.

```php
// good
if ($condition) {
   // conditional code
}

// bad
if ($condition) // conditional code
```

### early return

You **SHOULD** use early returns to prevent [complex condition](#complex-conditions) blocks and indentation.

### happy path

Following the [early return](#early-return) rule the happy path **SHOULD** be the last return and unindented.

```php
// good
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
// good
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
// good
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

### type safe comparison

You **SHOULD** use type safe comparison whenever possible instead of weak comparison.

```php
// good
return $isAccepted === true;
return $foo === 'bar';
return $value === null;
return $value === null;
return $value === '';

// bad
return (bool) $isAccepted;
return $foo == 'bar';
return is_null($value);
return empty($value);
return empty($value);
```

### ternary operators

You **MUST** place every portion of a ternary expression on its own line and start with the operator unless it's a simple and short expression.

```php
// good
$result = $object instanceof Model
    ? $object->name
    : 'A default value';

$name = $isFoo ? 'foo' : 'bar';

// bad
$result = $object instanceof Model ? $object->name : 'A default value';

$result = $object instanceof Model ?
    $object->name :
    'A default value';
```

## Strings

### early casting/transforming

You **MUST** cast a `string` as early as possible to another type if it's only a "wrapper" used in DB, form or wherever.

```php
// good
$agbAccepted = $request['agb_accepted'] === 'yes';

if (! $agbAccepted) {
    throw new AgbNotAcceptedException();
}

$model->agb_accepted = $agbAccepted;

// bad
if ($request['agb_accepted'] !== 'yes') {
    throw new AgbNotAcceptedException();
}

$model->agb_accepted = $request['agb_accepted'] === 'yes';
```

### concatenation / interpolation

You **SHOULD** prefer string interpolation above `sprintf()` and the `.` operator.

```php
// good
$greeting = "Hi, I am {$name}.";

// bad
$greeting = 'Hi, I am ' . $name . '.';
$greeting sprintf('Hi, I am %s.', $name);
```

[PSR-1]: https://www.php-fig.org/psr/psr-1/
[PSR-2]: https://www.php-fig.org/psr/psr-2/
[PSR-4]: https://www.php-fig.org/psr/psr-4/
[PSR-12]: https://www.php-fig.org/psr/psr-12/