var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controller/studentCtrl');
var studentobj = new Student();
const chaiaspromise = require('chai-as-promised');
chai.use(chaiaspromise);
const userctrl = require('../controller/userCtrl')

describe('----------Promise-----------',function(){
    // this.timeout(0)
    it('Normal value function', (done) => {
        studentobj.dbData().then((result) => {
            expect(result).to.be.equal(10);
            done()
        });
    });

    // Alternatively, you can use chai-as-promised syntax
    it('chai promised value function', function(){
        this.timeout(0)
        return expect(studentobj.dbData()).to.eventually.equal(10);
    });

    it('opt',function(){
        this.timeout(0);
        return expect( userctrl.newData()).to.eventually.have.deep.property('otp')
    })
});