var chai = require('chai'); // Move chai import to the top
var expect = chai.expect;
var Student = require('../controller/studentCtrl');
var stdClass = new Student();
const nock = require('nock');

describe('Nock test suit', function () {
    it('api test', function (done) {
        var obj = { status: 'ok', statusCode: 200, data: [] };

        const api = nock('https://api.publicapis.org')
            .get('/entries')
            .reply(200, obj);

        stdClass.thirdPartyAPI()
            .then(function (record) {
                expect(record).to.be.eql(obj);
                done(); // Call done here to signal that the test is complete
            })
            .catch(error => {
                done(new Error('Error ' + error)); // Fix the error message format and call done with an error
            });
    });
});