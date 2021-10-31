# Project Demo
![Desktop photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/shopqipo-home.png)
![Desktop photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/shopqipo-dashboard.png)
![Desktop photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/shopqipo-cart.png)
![Mobile photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/ahopqipo-mobile.png)
![Mobile photos](https://github.com/smyrmnsr/shopqipo-ecommerce/blob/main/ahopqipo-mobile-pages.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* NPM / Yarn and Node.js installed
* MongoDB

## How To Run
Create an MongoDB URI connection parameter in `/config.env` with your MongoDB URI:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

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
npm run client
```

Access the web app at http://localhost:3000/
