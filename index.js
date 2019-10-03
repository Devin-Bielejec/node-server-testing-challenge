const express = require("express");

const server = express();

const db = [
    {name: "Devin"}
]

describe('server.js', () => {
    // http calls made with supertest return promises, we can use async/await if desired
    describe('GET /', () => {
      it('should return an OK status code', async () => {
        const expectedStatusCode = 200;
  
        // do a get request to our api (server.js) and inspect the response
        const response = await request(server).get('/');
  
        expect(response.status).toEqual(expectedStatusCode);
      });
  
      it('should return a JSON array of objects containing names', async () => {
        const expectedBody = { name: 'Devin' };
  
        const response = await request(server).get('/');
  
        expect(response.body).toEqual(expectedBody);
      });
    });

    describe('POST /', () => {
        it("responds with json", function() {
            return request(server)
            .post("/")
            .send({name: "David"})
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            })
        })

    describe('DELETE /', () => {
        it("responds with json", function() {
            return request(server)
            .delete("/")
            .send({name: "David"})
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            })
        })
  });

module.export = {server, db};