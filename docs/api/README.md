# API

API resources **MUST** follow the [json:api](https://jsonapi.org) standard.

## Responses

### Create

* Create requests **MUST** use a http `POST` method.
* Successful create responses **MUST** return a `201 - Created` status code.
* Successful create responses **MUST** return the created entity resource as body.

### Update

* Update requests **MUST** use a http `PUT` or `PATCH` method.
* Successful update responses **MUST** return a `200 - OK` status code.
* Successful update responses **MUST** return the updated entity resource as body.

### Delete

* Delete requests **MUST** use a http `DELETE` method.
* Successful delete responses **MUST** return a `204 - No Content` status code.

## Packages

Helpful packages/resources could be:

* [Eloquent: API Resources](https://laravel.com/docs/6.x/eloquent-resources)
* [spatie/laravel-query-builder](https://github.com/spatie/laravel-query-builder)
* [spatie/laravel-json-api-paginate](https://github.com/spatie/laravel-json-api-paginate)
* [spatie/laravel-resource-links](https://github.com/spatie/laravel-resource-links)
* [spatie/laravel-fractal](https://github.com/spatie/laravel-fractal)
