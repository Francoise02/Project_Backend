const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/routes")
const PostRouter = require("./routes/postRoutes")
const UserRouter = require("./routes/routes")
const cors = require('cors')
const jwt = require('jsonwebtoken')
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
const app = express();



const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');

const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Offical API Documentaion',
            version:'1.0.0',
            description:'API for users and posts management',
            contact:{
                name:'Mukantwari francoise',
                email:'f.mukantwari@alustudent.com'
            },
            servers:["http://localhost:3000"]
        }
    },
    apis:["index2.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));


// const {}=require('./update')
// var corsOptions={
//     origin:'http://example.com',
//     optionSuccessStatus:200
// }

app.use(express.json());
app.use(cors())
/**
 * @swagger
 * definitions:
 *  post:
 *   type: object
 *   properties:
 *    title:
 *     type: string
 *     description: name of the blog post
 *     example: 'Java is coffee'
 *    content:
 *     type: string
 *     description: content of the blog post
 *     example: 'Java is enjoyable OOP programming language'
 *    dateTime:
 *     type: date
 *     description: date when the blog post was posted
 *     example: '2022-04-23'
 *    upvotes:
 *     type: Number
 *     description: the number of upvotes a post have
 *     example: 439
 *    downvotes:
 *     type: Number
 *     description: the number of downvotes a post have
 *     example: 23
 *    category:
 *     type: array
 *     description: the category a blog belong to
 *     example: ["programming", "java", "coding"]
 *    comments:
 *     type: array
 *     description: An array of comments to a blog post
 *     example: [Comment]
 *  User:
 *   type: object
 *   properties:
 *    username:
 *     type: string
 *     description: name of the user
 *     example: 'Fanny'
 *    email:
 *     type: string
 *     description: email of the user
 *     example: 'Fanny@gmail.com'
 *    password:
 *     type: string
 *     description: the password of a user
 *     example: '******'
 *  Comment:
 *   type: object
 *   properties:
 *    _id:
 *     type: string
 *     description: id of the comment
 *     example: 2
 *    timePosted:
 *     type: date
 *     description: the data when a comment was posted
 *     example: 2022-03-12
 */


  /**
    * @swagger
    * /api/v1/add_post:
    * post:
    *   summary: create post
    *   description: create post
    *   parameters:
    *    - in: body
    *      name: body
    *      required: true
    *      description: body of the post
    *      schema:
    *       $ref: '#/definitions/post'
    *   requestBody:
    *    content:
    *     application/json:
    *      schema:
    *       $ref: '#/definitions/post'
    *   responses:
    *    200:
    *     description: success
    *    500:
    *     description : error
    */
PostRouter.post;
// app.post("/employee", createEmployee);


/**
 * @swagger
 * /api/v1/add_user:
 * post:
 *   summary: creating a new user
 *   description: create a new user
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: body of the user
 *      schema:
 *       $ref: '#/definitions/User'
//  *       $ref: './models/users'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/User'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description : error
 */
 UserRouter.post;


// /**
//  * @swagger
//  * /employeeassignment:
//  *  post:
//  *   summary: create employee assignment
//  *   description: create employee assignment
//  *   parameters:
//  *    - in: body
//  *      name: body
//  *      required: true
//  *      description: employee assignment of the team
//  *      schema:
//  *       $ref: '#/definitions/Employee_Assignment'
//  *   requestBody:
//  *    content:
//  *     application/json:
//  *      schema:
//  *       $ref: '#/definitions/Employee_Assignment'
//  *   responses:
//  *    200:
//  *     description: success
//  *    500:
//  *     description: error
//  */
// app.post("/employeeassignment",createEmployeeAssignment);

/**
 * @swagger
 * /api/v1/posts:
 *  get:
 *   summary: get all posts
 *   description: get all posts
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
 PostRouter.get



/**
 * @swagger
 * /api/v1/users:
 *  get:
 *   summary: get all users
 *   description: get all users
 *   responses:
 *    200:
 *     description: success
 */
// app.get('/teams',cors(), getAllTeams)
UserRouter.get

/**
 * @swagger
 * /api/v1/users/{_id}:
 *  get:
 *   summary: get a specific user
 *   description: get a user
 *   parameters:
 *    - in: path
 *      name: _id
 *      schema:
 *       type: Number
 *      required: true
 *      description: id of the user
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
// app.get('/employee/:id',cors(), getEmployee)
UserRouter.get


/**
 * @swagger
 * /api/v1/posts/{postId}:
 *  get:
 *   summary: getting a specific post
 *   description: getting a specific post
 *   parameters:
 *    - in: path
 *      name: postID
 *      schema:
 *       type: String
 *      required: true
 *      description: id of the team
 *      example: "626eb680d1369f83c8e183e5"
 *   responses:
 *    200:
 *     description: success
 */
// app.get('/team/:id',cors(), getTeam)
PostRouter.get


/**
 * @swagger
 * /api/v1/posts/{postId}:
 *  put:
 *   summary: update a post
 *   description: update a post
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: postId
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the post
 *      example: "626eb680d1369f83c8e183e5"
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/post'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/post'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/post'
 */
PostRouter.put


/**
 * @swagger
 * api/v1/users/{_id}:
 *  put:
 *   summary: update user
 *   description: update user
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: _id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the team
 *      example: 2
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/User'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/User'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/User'
 */
// app.put("/team/:id",cors(corsOptions),updateTeam)
UserRouter.put

/**
 * @swagger
 * api/v1/users/{_id}:
 *  delete:
 *   summary: delete user
 *   description: delete user
 *   parameters:
 *    - in: path
 *      name: _id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the user
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */

UserRouter.delete
// app.delete("/employee/:id",deleteEmployee)


/**
 * @swagger
 * /api/v1/posts/{postId}:
 *  delete:
 *   summary: delete a post
 *   description: delete a post
 *   parameters:
 *    - in: path
 *      name: postId
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the post
 *      example: "626eb680d1369f83c8e183e5"
 *   responses:
 *    200:
 *     description: success
 */
// app.delete("/team/:id",deleteTeam)
PostRouter.delete


// /**
//  * @swagger
//  * /employeeassign/{employee_id}/{team_id}:
//  *  delete:
//  *   summary: delete employee assignment
//  *   description: delete employee assignment
//  *   parameters:
//  *    - in: path
//  *      name: employee_id
//  *      schema:
//  *       type: integer
//  *      required: true
//  *      description: id of the employee
//  *      example: 12
//  *    - in: path
//  *      name: team_id
//  *      schema:
//  *       type: integer
//  *      required: true
//  *      description: id of the team
//  *      example: 12
//  *   responses:
//  *    200:
//  *     description: success
//  */
// app.delete("/employeeassign/:employee_id/:team_id",deleteEmployeeAssignment)


const username = "Francoise";
const password = "root";
const cluster = "cluster0";
const dbname = "myBrand";

mongoose.connect(
  process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@${cluster}.ov7s3.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get('/', (req, res) => {
  res.send('https://app.swaggerhub.com/apis/cloners/Reddit/1.0.0')
});

app.use('/api/v1',UserRouter);
app.use('/api/v1',PostRouter);

const PORT = process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


app.listen(3000,()=>{
    console.log("server listening in port 3000");
})