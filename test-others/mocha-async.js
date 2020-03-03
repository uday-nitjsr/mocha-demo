var http = require("http")
var assert = require("chai").assert

describe("Learning how to test async", function(){
    it.only("Async test callback",function(done){
        http.get('http://www.example.com', function(res) {
            assert.equal(200, res.statusCode);
            done();
        });
        done()
    })

    it("Async test with promise",function(done){
        httpRequest.get("http://www.example.com/").then(function(response){
            assert.equal(200, response.statusCode);
            done();
        })
       
    })
})

var httpRequest = {
    get: url => {
      return (new Promise(function(resolve, reject) {
        http.get(url, res => {
          resolve(res);
        });
      }));
    }
  };