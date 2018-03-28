const tape = require("tape");

tape("test that tape is working", (t)=>{
    t.equal(1,1, "number 1 is equal to 1")
    t.end()
})