# API

## Exceptions

- 400 Bad request
- 404 Not found
- 409 Conflict

## End-points

### start page

`GET /`

Response example

`home reached`

### page not found

`GET **404`

Response example

```html
<body style="background-color: crimson;">
  <h1 style="color: white; text-align: center; vertical-align: center;">
    PAGE NOT FOUND
  </h1>
</body>
```

### get sum of two numbers

`GET /sum`

Request example

`/sum?num1=number&num2=number`

Response example

```json
{
  "num1": 20,
  "num2": 50,
  "sum": 70
}
```

Expected errors

- 400

```json
{
  "error": { "msg": "Not enough numbers for operations" }
}
```

### get index of a substring in a string

`GET /substr`

Request example

`/substr?str=apple&start=1&length=2`

Response example

```json
{
  "word": "apple",
  "startIndex": "1",
  "length": "2",
  "substring": "pp"
}
```

Expected errors

- 400

```json
{
  "error": {
    "msg": "Not enough params"
  }
}
```

### get reversing letters in a string

`GET /reverse`

Request example

`/reverse?string=apple`

Response example

```json
{
  "string": "apple",
  "reverse": "elppa"
}
```

Expected errors

- 409

```json
{
  "error": { "msg": "Invalid string" }
}
```
