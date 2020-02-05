# Laravel

We use [Laravel] as our preferred PHP framework.
You **SHOULD** use [Laravel] or [Lumen] whenever a PHP framework is needed.
All [Laravel] projects **MUST** follow these guidelines and the general [PHP](/php) ones.

## Routing

* You **MUST** split the top-level route groups (like `app` & `admin` & `api`) into different route files.
* You **MUST NOT** use a `namespace()` for route groups.
* You **MUST** use `Route::prefix()->name()->group()` for multiple routes with the same prefix.
* You **MUST** use the HTTP verb as first method.
  * `Route::name()->get()` => `Route::get()->name()`
* You **MUST** define all routes with a direct definition instead of multiple route defining calls.
  * `Route::resource()` => `Route::group(function() { Route::get(); })`

### Names

* You **MUST** use the namespace, controller, action as route name separated by dots.
  * `admin.users.index`
* You **MUST** use `lower_snake_case` and `dot.notation` for route names.
* You **MUST** use plural version for route names.
  * `admin.user.index` => `admin.users.index`

### Parameters

* You **MUST** use `{lowerCamelCase}` for route parameters.
* The parameter name **MUST** match the action argument.
* You **SHOULD** use patterns for route parameters.
* You **MUST** use model binding instead of custom resolving.

### Paths

* You **MUST** use `kebab-case` for path segments.

## Controllers

The controller is only a class to receive a request and call business logic with received data.

* It **MUST NOT** authorize the request itself.
* It **MUST NOT** validate the request itself.
* It **MUST NOT** contain business logic.
* It **MUST** use dependency injection if another class is needed.
* It **MUST NOT** extend the base controller `\App\Http\Controllers\Controller` because everything it provides **MUST** be done in a form request, middleware or any other responsible class.

### Naming

* Controllers **MUST** be suffixed by `Controller`.
* Resource controllers **MUST** use the singular resource name.
  * `UsersController` => `UserController`
* Resource controllers **MUST** stick to CRUD keywords (`index`, `create`, `store`, `show`, `edit`, `update`, `destroy`).
* If you need another action you **MUST** use a new resource controller or an invokable controller for a single action which **MUST** have the action verb in it's name.

## Keyword Helpers

Laravel provides helper functions to replace common keyword scenarios like `throw_if()`, `abort_unless()` and so on.

* You **SHOULD** use the explicit native PHP keywords in favor of Laravel helpers.

## Model magic properties

Laravel provides model properties like `$with`, `$appends` or `$withCount` to load/append data to every model instance.

* You **MUST** use explicit calls in query builder instead of these properties.
* You **MUST** use API resources in favor of appending attributes to `toArray()` call.

## Validation Exception

### Naming

* You **MUST** use default array key naming rules for custom validation exceptions - `lower_snake.dot.notation`.

[Laravel]: https://laravel.com
[Lumen]: https://lumen.laravel.com
