# Project Demo
![Desktop photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/shopqipo-home.png)
![Desktop photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/shopqipo-dashboard.png)
![Desktop photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/shopqipo-cart.png)
![Mobile photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/ahopqipo-mobile.png)
![Mobile photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/ahopqipo-mobile-pages.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [NPM](https://docs.npmjs.com/cli/v7/commands/npm-install) and [Node.js](https://nodejs.org/en/) installed
* [MongoDB](https://www.mongodb.com/)


### Configuration (Optional)

By default, the server will expect to connect to a MongoDB instance running on localhost:27017. However, you can customize the environment to use different values for the MongoDB host. To do that, you can create a `.env` file for specifying credential information for MongoDB. 

Create a new file called `.env`, with the following properties:

```
MONGO_URL=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
MONGO_USER=username
MONGO_PASSWORD=password
PORT=5000
```

or instead, you can use the equivalent JSON:

```json
{
  "mongo": {
    "url": "mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    "user": "username",
    "password": "password"
    "port": "5000"
  }
}
```

Where the URL, username, and password are set to your preferences.

### Installing

Installing NPM modules on both client and server folders

Execute these commands from the project root directory

```
npm install
```

```
cd client && npm install
```

### Running the app

Open a terminal on root directory

```
npm run start
```

and open another terminal on client directory
```
cd client && npm start
```

Access the web app at http://localhost:3000/

## Technologies Used

FRONTEND

![REACT](https://img.shields.io/badge/REACT-black?style=flat&logo=react&logoColor=cyan)
![JAVASCRIPT](https://img.shields.io/badge/-JAVASCRIPT-black?style=flat&logo=javascript)
![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat&logo=css3)
![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat&logo=html5&logoColor=red)
![TAILWINDCSS](https://img.shields.io/badge/TAILWIND_CSS-black?style=flat&logo=tailwind-css&logoColor=cyan)

BACKEND

![NODE.JS](https://img.shields.io/badge/NODE.JS-black?style=flat&logo=node-dot-js&logoColor=green)
![MONGODB](https://img.shields.io/badge/MONGODB-black?style=flat&logo=postgresql&logoColor=blue)


## Author

👤 **Samir Mansour**

- Github: [@smyrmnsr](https://github.com/smyrmnsr)
