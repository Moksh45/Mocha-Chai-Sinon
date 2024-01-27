const chai = require('chai')
var assert = require('chai').assert
var should = require('chai').should()
const { expect } = require('chai');

//  ASSERT

describe('Assert check', function () {

    let userName = 'Moksh45'
    let mylist = {
        item: [{
            id: 1,
            name: "demo"
        }],
        title: 'user list'
    }
    it("check string", function () {
        assert.typeOf(userName, 'string');
    })

    it("Equal match", function () {
        assert.equal(userName, "Moksh45");
    })

    it("lenght match", function () {
        assert.lengthOf(mylist.item, 1)
    })
})


// Should

describe("Should check", function () {
    let userName = "Moksh45";
    let mylist = {
        item: [{
            id: 1,
            name: "demo"
        }],
        title: 'user list'
    };

    it("check string", function () {
        userName.should.be.a('string');
    });

    it("equal check ", function () {
        userName.should.be.equal("Moksh45")
    })

    it("lenght check", function () {
        mylist.should.have.property('item').with.length(1)
    })
});


// expect

describe('check expect', () => {
    let userName = "Moksh45";
    let mylist = {
        item: [{
            id: 1,
            name: "demo"
        }],
        title: 'user list',
        address:{
            country:'India',
            phoneNo:['902223232','2312321323']
        }
    };

    it('string match',()=>{
        expect(userName).to.equal('Moksh45')
    })

    it('lenght match',()=>{
        expect(userName).to.lengthOf(7)
    })

    it('object lenght',()=>{
        expect(mylist).to.have.property('item').with.lengthOf(1)
    })

    it('api object match',()=>{
        expect(mylist).to.have.all.keys('item','title',"address")
    })

    it('phone no',()=>{
        expect(mylist).to.have.nested.property('address.phoneNo[1]')
    })

    it('check country name',()=>{
        expect(mylist).to.have.nested.include({'address.country':'India'})
    })
})
