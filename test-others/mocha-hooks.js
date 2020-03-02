describe("This is ", function(){
    before("Executes once before any of the describe block", function(){
        console.log("Execute before")
    })

    beforeEach("Executes before every describe block", function(){
        console.log("Execute before every describe block")
    })
    describe("Describe block 1", function(){
        before("Executes before any of the test block", function(){
            console.log("Executes only once in the scope of describe block 1")
        })

        beforeEach("Executes before every test", function(){
            console.log("Execute before every test in describe block 1")
        })

        it("Test case 1", function(){
            console.log("Test 1")
        })
        it("Test case 2", function(){
            console.log("Test 2")
        })
    })

    describe("Describe block 2", function(){
        before("Executes before any of the test block", function(){
            console.log("Executes only once in the scope of describe block 2")
        })

        beforeEach("Executes before every test", function(){
            console.log("Execute before every test in describe block 1")

        })

        it("Test case 1", function(){
            console.log("Test 1")
        })
        it("Test case 2", function(){
            console.log("Test 2")
        })
    })
})