/*jshint expr:true*/
var _ = require('lodash');
var should = require('should');
var agent = require('./util/agent');

before(function (done) {
  //mongoose.connect(config.db.mongodb);
  done();
});

describe('Example API', function () {
  it('should run some page', function (done) {
    someApiFunction(done).expect(404);
  });
});

function someApiFunction(done) {
  var data = {};
  return agent()
    .post('/page')
    .send(data)
    .end(function (err, res) {
      if (err) {
        throw err;
      }

      done();
    })
    ;
}
