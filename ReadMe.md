# Appointements Management

The idea of the project is to manage appointments of a hotel with the entire system of the hotel (customers, employees, rooms, appointements, analytics...), this branch contain part back-end, you will find the API documentation below.

Don't forget to click the star and follow buttons to encourage us to build something amazing🌟 

Enjoy <3

## Authors

- [@Hassan Essajai](https://www.github.com/hassanchajai)

- [@Faical Bahsis](https://github.com/faical23)

- [@Amine Saissi](https://github.com/aminesaissihassani)
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```


# API Reference

### Authentification 

#### Login

```http
  POST /api/v1/auth
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Email` | `string` | **Required**.  |
| `Password` | `string` | **Required**. |

#### Logout

```http
  DELEET /api/v1/auth
```

### Client (require Authentification)

#### Get All 

```http
  GET /api/v1/client
```


#### Get One

```http
  GET /api/v1/client/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object Id` | **Required**.  |

#### Get Client Hotel

```http
  GET /api/v1/client/hotel/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object Id` | **Required**.  |

#### Add 

```http
  POST /api/v1/client
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Name` | `String` | **Required**.  |
| `Phone` | `String` | **Required**.  |
| `Email` | `String` | **Required**.  |
| `Hotel` | `String` | **Required**.  |

### Hotel (require Authentification)

#### Get All 

```http
  GET /api/v1/hotel
```


#### Get One

```http
  GET /api/v1/hotel/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object Id` | **Required**.  |


#### Add 

```http
  POST /api/v1/hotel
```

| field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `City` | `String` | **Required**.  |
| `Email` | `String` | **Required**.  |
| `Address` | `String` | **Required**.  |
| `Phone` | `String` | **Required**.  |
| `Password` | `String` | **Required**.  |
| `CoverImg` | `String` | **Required**.  |
| `Image` | `Array` | **Required**.  |
| `Website` | `String` |   |
| `Description` | `String` | **Required**.  |
| `Instagram` | `String` |  |
| `Localisation` | `String` | **Required**.  |
| `Hashtag` | `Array` |   |
| `Service` | `Array` | **Required**.  |
| `Verified` | `bool` |   |

#### Update 

```http
  PUT /api/v1/hotel/{id}
```

| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object id` | **Required**.  |

Body

| field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `City` | `String` | **Required**.  |
| `Email` | `String` | **Required**.  |
| `Address` | `String` | **Required**.  |
| `Phone` | `String` | **Required**.  |
| `Password` | `String` | **Required**.  |
| `CoverImg` | `String` | **Required**.  |
| `Image` | `Array` | **Required**.  |
| `Website` | `String` |   |
| `Description` | `String` | **Required**.  |
| `Instagram` | `String` |  |
| `Localisation` | `String` | **Required**.  |
| `Hashtag` | `Array` |   |
| `Service` | `Array` | **Required**.  |
| `Verified` | `bool` |   |

#### Delete 

```http
  DELETE /api/v1/hotel/{id}
```

| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object id` | **Required**.  |

### Room (require Authentification)

#### Get All 

```http
  GET /api/v1/room
```


#### Get One

```http
  GET /api/v1/room/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object Id` | **Required**.  |

#### Get rooms hotel

```http
  GET /api/v1/room/hotel/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `ObjectId` | **Required**.  |

#### Add 

```http
  POST /api/v1/room
```

Body

| field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Number` | `String` | **Required**.  |
| `State` | `String` | **Required**.  |
| `Block` | `String` | **Required**.  |
| `Price` | `String` | **Required**.  |
| `Description` | `String` | **Required**.  |
| `Type` | `ObjectId` | **Required**.  |
| `Hotel` | `Array` | **Required**.  |
| `Image` | `Array` |   |
| `Bed` | `Array` | **Required**.  |

#### Update 

```http
  PUT /api/v1/room/{id}
```

| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object id` | **Required**.  |

Body

| field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Number` | `String` | **Required**.  |
| `State` | `String` | **Required**.  |
| `Block` | `String` | **Required**.  |
| `Price` | `String` | **Required**.  |
| `Description` | `String` | **Required**.  |
| `Type` | `ObjectId` | **Required**.  |
| `Hotel` | `Array` | **Required**.  |
| `Image` | `Array` |   |
| `Bed` | `Array` | **Required**.  |

#### get disponible rooms 

```http
  GET /api/v1/room/Hotel/Disponible/{id}
```

| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object id` | **Required**.  |

#### get rooms by types

```http
  GET /api/v1/room/type/{id}
```

| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object id` | **Required**. type id  |

#### get room by type by hotel

```http
  GET /api/v1/room/{hotelid}/{id}
```

| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `hotelid` | `Object id` | **Required**. hotel id  |
| `id` | `Object id` | **Required**. type id  |

### Type Room (require Authentification)

#### Get All 

```http
  GET /api/v1/RoomType
```


#### Add type room

```http
  POST /api/v1/RoomType
```
Body

| field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**.  |

### Comments (require Authentification)

#### Get All 

```http
  GET /api/v1/comment
```


#### Add 

```http
  POST /api/v1/comment
```
Body

| field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `comment` | `string` | **Required**.  |
| `hotel` | `ObjectId` | **Required**.  |
| `rate` | `number` | **Required**.  |

### Reservation (require Authentification)

#### Get One  

```http
  GET /api/v1/Reservation/{id}
```
| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `ObjectId` | **Required**.  |

#### Get reservations by hotel

```http
  GET /api/v1/Reservation/hotel/{id}
```
| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `ObjectId` | **Required**. hotel id |

#### Update 

```http
  PUT /api/v1/Reservation
```
Body

| field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `hotel` | `ObjectId` | **Required**.  |
| `Client` | `ObjectId` | **Required**.  |
| `Total` | `number` | **Required**.  |
| `DateStart` | `Date` | **Required**.  |
| `DateEnd` | `Date` | **Required**.  |
| `Payed` | `boolean` | **Required**.  |
| `Room` | `Array` | **Required**.  |
| `Duree` | `String` | **Required**.  |

#### Add 

```http
  POST /api/v1/Reservation
```
Body

| field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `hotel` | `ObjectId` | **Required**.  |
| `Client` | `ObjectId` | **Required**.  |
| `Total` | `number` | **Required**.  |
| `DateStart` | `Date` | **Required**.  |
| `DateEnd` | `Date` | **Required**.  |
| `Payed` | `boolean` | **Required**.  |
| `Room` | `Array` | **Required**.  |
| `Duree` | `String` | **Required**.  |

#### Delete 

```http
  DELETE /api/v1/Reservation/{id}
```

| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object id` | **Required**.  |

### Invoice (require Authentification)

#### Get All 

```http
  GET /api/v1/Invoice
```

#### Get All invoices by hotel

```http
  GET /api/v1/Invoice/Hotel/:Id
```
| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object id` | **Required**.  hotel id|

#### Get All invoices by client

```http
  GET /api/v1/Invoice/client/:Id
```
| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object id` | **Required**.  client id|

#### Add invoices

```http
  POST /api/v1/Invoice/client/:Id

```
| field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `hotel` | `Object id` | **Required**.  hotel id|
| `client` | `Object id` | **Required**.  client id|
| `reservation` | `Object id` | **Required**.  reservation id|
| `DateFacture` | `Date` | **Required**.  reservation id|
| `PaiementMethods` | `String` | **Required**.  reservation id|

 

## Technologies

Node.js, ES6, Postman, bcrypt, expressJs
