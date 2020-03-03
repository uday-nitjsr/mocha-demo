var expect = require("chai").expect
//BDD style 1 Describe and it
describe("Understanding BDD Style 1",()=>{
    it("BBD Style 1, Test case 1",()=>{
        expect(1+1).to.be.eql(2)
    })
})

// BDD style 2 context and specify
context("Understanding BBD style 2",()=>{
    specify("BDD Style 2, Test case 2",()=>{
        expect(1+1).to.be.eql(2)
    })
})