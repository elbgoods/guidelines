# API

API resources **MUST** follow the [json:api](https://jsonapi.org) standard - at least the [Top Level](#top-level) spec.

## Top Level

A JSON object **MUST** be at the root of every JSON:API response containing data. This object defines a document’s “top level”.

A document **MUST** contain at least one of the following top-level members:

* `data`: the document’s “primary data”
* `errors`: an array of error objects
* `meta`: a meta object that contains non-standard meta-information.

The members `data` and `errors` **MUST NOT** coexist in the same document.

A document **SHOULD** contain `links` on top-level.

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
