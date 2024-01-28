var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect
var Student = require('../controller/studentCtrl')
var studentobj = new Student();

describe ('----------Mock-----------', () => {
    it('count function', () => {
       var mock = sinon.mock(studentobj)
       var expt = mock.expects('getExternal')
       expt.exactly(1)
       expt.withArgs(22)
       studentobj.finalMarks(22)
       mock.verify()

    })

})