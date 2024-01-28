var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon')

describe('Heading 1', function () {
    // after(function(){
    //     console.log("##########last#############")
    // })

    // before(function(){
    //     console.log("##############first###########")
    // })

    // afterEach(function(){
    //     console.log("############after every test case #########")
    // })

    // beforeEach(function(){
    //     sinon.restore();
    //     console.log("##########before every test case ################ ")
    // })

    let data = 'code'

    // it.only('check string',function(){    // run only this
    //     expect(data).to.be.a("string")
    // })

    it.skip('value', function () {
        expect(data).to.be.equal('code')
    })

    it('value2', function () {
        expect(data).to.be.equal('code')
    })
})

describe("---------Heading 2-----", function () {
    let data = 'code'

    it.skip('value', function () {
        expect(data).to.be.equal('code')
    })
})