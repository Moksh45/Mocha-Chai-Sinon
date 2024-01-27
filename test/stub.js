var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect
var Student = require('../controller/studentCtrl')
var studentobj = new Student();

describe ('----------stub-----------', () => {
    it('test user function', () => {
       var stubobj = sinon.stub(studentobj, 'getExternal')
       stubobj.withArgs(40).returns(5)
       expect(studentobj.finalMarks(40)).to.be.equal(54)

    })

})