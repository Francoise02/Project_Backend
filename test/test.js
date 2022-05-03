
// const should = require("should");
// const request = require("request");
// const expect = require("")
let chai = require ("chai");
let chaiHttp = require ("chai-http");
let app = require("../index3.js");
let faker = require("@faker-js/faker");
const { describe } = require("mocha");
const { response } = require("express");


// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import {faker} from '@faker-js/faker'
// import app from '../index3.js';

chai.should();
chai.use(chaiHttp);

// describe('Posts API', () => {

//     /**
//      * Test the GET route
//      */

//     describe("GET /api/v1/posts", () => {
//         it("It should GET all the posts", (done) => {
//             chai.request(server)
//                 .get("/api/v1/posts")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.body.should.be.a['array'];
//                 done();    
//                 })
//         })
//     })



//     /**
//      * Test the GET by ID route
//      */


    
//     /**
//      * Test the POST route
//      */



    
//     /**
//      * Test the PUT route
//      */


//     /**
//      * Test the DELETE route
//      */


// })




















describe('Tests blog enpoints', () => {


	describe('Test adding a new post', () => {
		const post = {
			title: faker.name.findName(),
			content: faker.lorem.sentence(),
		}

		const post2 = {
			name: faker.name.findName(),
			email: faker.internet.email(),
			msg: ''
		}

		it('Should add a new post', done => {
			chai.request(app)
			.post('/api/v1/add_post')
			.send(post)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('msg', 'post added');
				done();
			})
		});

		it('Should get all posts', done => {
			chai.request(app)
			.post('/api/v1/posts')
			.end((err, res) => {
				res.should.have.status(404);
				res.body.should.be.a('object');
				done();
			})
		})

		it('Should get one message', done => {
			chai.request(app)
			.get('/api/v1/posts/626eb680d1369f83c8e183e5')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			});
		});
	})
})