var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect
var Student = require('../controller/studentCtrl')
var studentobj = new Student();

describe ('Spay ', () => {
    it('test user function', () => {
        expect(studentobj.userId()).to.be.equal(12)
    })

    it('function count', () => {
        var spyObj = sinon.spy(studentobj , 'getInfo')
        studentobj.home(5)
        expect(spyObj.calledOnce).to.be.true
    })

    // it('function argument check', () => {
    //     var spyObj = sinon.spy(studentobj , 'getInfo')
    //     studentobj.home(5)
    //     expect(spyObj.calledWith(5,1)).to.be.true
    // })
})