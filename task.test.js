const factorialTest = require("./factorialtask")

const{expect} = require ("chai");

describe("factorial test", () => {
    it ("should be 5!", () => {
        expect(5+"!").to.equal(factorialTest(120))
     })
});