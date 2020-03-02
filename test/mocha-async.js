var http = require("http")
var assert = require("chai").assert

describe("Learning how to test async", function(){
    it("Async test",function(done){
        http.get('http://www.example.com', function(res) {
            assert.equal(200, res.statusCode);
            done();
        });
    })

    // it("Async test with promise",function(done){
    //     httpRequest.get("http://www.example.com/ioi").then(function(response){
    //         // assert.equal(200, response.statusCode);
    //         done();
    //     }).catch(function(error,response){
    //         console.log(error)
    //         done(error)
    //     })
    // })

    // it("Asyn done handles error",function(done){
    //     http.get('http://www.example.com/1', function(res) {
    //         console.log(res)
    //         if(res.statusCode===201){
    //             done()
    //         }else{
    //             // done(res.)
    //         }
    //     });
    // })
})

var httpRequest = {
    get: url => {
      return (new Promise(function(resolve, reject) {
        http.get(url, res => {
          reject(res);
          return {}
        });
      }));
    }
  };