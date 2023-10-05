const expect = require("chai").expect;

const f = require("../f_skeleton");

describe("thenable", () => {
  it("resolves with correct value", (done) => {
    Promise.resolve(f.thenable)
    .then((result) => {     
      expect(result).to.equal("👍");
      done();
    });
  }); 
});

describe("rejectable", () => {
  it("rejects with correct value", (done) => {
    Promise.reject(f.rejectable)
      .catch((err) => err)
      .catch((err) => {
        expect(err).to.equal("👎");
        done();
      });
  });
});