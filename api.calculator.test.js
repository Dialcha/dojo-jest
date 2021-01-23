const request = require("supertest");
const app = require("./app");

describe("testing /add path", () => {
    test("it should return status code 200", done => {
        request(app)
        .get("/add?a=1&b=1")
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })

    test("it should return application/json content-type", done => {
        request(app)
        .get("/add?a=1&b=1")
        .then(response => {
            expect(response.type).toBe("application/json");
            done();
        })
    })
})
