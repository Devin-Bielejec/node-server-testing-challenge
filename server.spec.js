const request = require("supertest");
//getting server from server file, but not actually running the server with a command
const server = require("./server.js");

describe('server.js', () => {
    // http calls made with supertest return promises, we can use async/await if desired
    
    it('should return an OK status code', async () => {
    const expectedStatusCode = 200;

    // do a get request to our api (server.js) and inspect the response
    let response;
    
    return request(server).get('/').then(res => {
    response = res;
    expect(response.status).toEqual(expectedStatusCode);
    })
    })

  
    it('should return a JSON array of objects containing names', async () => {
        const expectedBody = { name: 'Devin' };
  
        const response = await request(server).get('/');
  
        expect(response.body).toEqual(expectedBody);
      });

    it("responds with json", function(done) {
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

    it('should return a JSON object fron the index route', async () => {
        const response = await request(server).del('/').send({name: "Devin"});
  
        expect(response.type).toEqual('application/json');
      });
    
})


