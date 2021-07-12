# API

## Exceptions
* 400 Bad request body
* 404 Not Found

## Example Error Message
```json
  http code 400

  {
    "error": "smth went wrong"
  }
```

```json
  http code 404

  {
    "error": "Route ${route} not found"
  }
```

## Sum

##### Request:
```json
  POST /sum
  Content-Type: application/json
 
  {
    "num1": "1",
    "num2": "2",
  }
```

##### Response:
``` json
  {
    "result": "3"
  }
```

## Reverse

##### Request:
```json
  POST /reverse
  Content-Type: application/json
 
  {
    "string": "Homework",
  }
```

##### Response:
``` json
  {
    "result": "krowemoH"
  }
```

## Substring

##### Request:
```json
  POST /substring
  Content-Type: application/json
 
  {
    "string": "Homework",
    "substring": "wo",
  }
```

##### Response:
``` json
  {
    "result": "4"
  }
```