import { Context } from "mocha";

Context("This is ", function(){
    before("Executes once before any of the describe block", function(){

    })

    beforeEach("Executes before every describe block", function(){

    })
    describe("Describe block 1", function(){
        before("Executes before any of the test block", function(){

        })

        beforeEach("Executes before every test", function(){
            
        })
        it("Test case 1", function(){

        })
    })
})