# Back Test

### enviroment
You can set enviroments:
- MONGODB_URI: uri of mongodb. default: localhost:27017/dev
- PORT: port of application. default: 8080.
- RESTAURANT_API: restaurant api. default: http://opentable.herokuapp.com/api

### install and run
```
    npm install
    npm run start:dev
```
OR
```
    docker-compose up
```

Starts on `http://localhost:8080`.
Attach examples to use from postman in the main directory.

### I included several core libs

* Mongoose _-  mongodb driver.
* ExpressJs _- http framework.
* Joi _- validations library.

And some **other useful libs** like eslint, nodemon, axios.

### Restaurants
To get restaurants I use http://opentable.herokuapp.com .

## Testing 
- Lint:  I use eslint based on airbnb-rules rules. If you use vscode you can see the errors directly, or by console running ` npm run test` .
- TDD: I did not get to implement them in 5 hours.

_Tested using NPM 6.9.0, Node v10.16.3, Git 2.19.0 over Mac OS 10.14.2.
