This is a base node js project template, which anyone can use, by keeping some ofthe most important code pronciples and project management recommendations. Feel free to change anything.

`src` -> Inside the src folder all the actiral source code regarding the project will reside, this will not include any kind of test. you might want to make separate testes folder.


Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configurations or setup of a libraryy or a module will be done. For example: setting up `dotenv`  so that we can use the enviornment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to set up the logging library tha can help to prepare meaningful logs, so configuraions for this library should also be done her


- `routes` -> IN the outes folder we register the route and the corresponding middlewares and controllers.


- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc


-`controllers` -> they are kind of the last middlerwares as postgram you call your business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer returns an output. We strucure the API response in controllers and send the output.


-`repositories`-> this folder contains all the logic using which we interact the db by writing queries. All the raw queries or ORM queries will go here.


-`services` -> contains the business logic and interacts with repositories for data from the databases

-`utils` -> contains   helper methods, error calsses etc


### Setup the Project
-Download this template from github and open it in your facourite text editr
-Go inside the folder path and execute the following command;

In th eroot directory create a `.env` file an ass the follwoing env variables 
```
PORT =port number of your own choice

```

-Inside the `src/config` folder create a f ile named as `config.json` and write the followinf code: 

-go inside the `src` folder and execute the following command:
    ```
    npx sequalize init
    ```

-By executing the above command you will get migrations and seeders folder along with a config.json insider the confg folder

- If you are setting up your development envionment, then write the username of your db, password of the db and in the dialect mention whatever db you are using for ex: mySql, mariadb
-If you are setting up test or prod enviornment, make sure you also replace the host with the hosted url.

-TO run the server execute 
```
npm run dev

```