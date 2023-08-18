# CRUD_API_Backend

step 1:-
       1) Firstly we have to intilize the project by using "npm init" cmd.
       2) Then we have to install the dependecies like framework express.js "npm i express" and for mongodb & mongoose "npm install mongodb".
       3) And finally, we have to install the nodemon for instant running of application while coding and developement purpose.By using this cmd "npm install nodemon --save-dev".
       note:After installation, in package.json file we need to change the following line.
        "scripts": {
              "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node[Filename] app.js",
    "dev": "nodemon filename.js"
           },
Step 2:-
       1)We have to import all the dependencies with the help of require keyword
       2)then create the model with mongoose and export
       3)then we need to create the middle ware ex:"app.express(json())"
Step 3:-Routes
        1)With the help of postman api.we have to perform the routes operation.
        2)get,post,put,delete
        3)By using this we can store the data into mongodb local.

note:**to run the app use the cmd "nodemon app.js"**
