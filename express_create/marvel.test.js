const chai = require("chai");

const chaiHttp = require("chai-http");
const { it } = require("node:test");

chai.use (chaiHttp);

const server = require("../index");

describe("Marvel tests", () => {
    it("should create Marvel Hero", (done) => {
        const Marvel = {
            "name": "Black Panther",
            "alias" : "T'challa ",
            "country": "Wakanda"
        }
        chai.request(server).post("/Marvel/createMarvel").send(Marvel).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(Marvel);
        })
    })
})