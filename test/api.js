const chai = require('chai')
var assert = require('chai').assert
var should = require('chai').should()
const { expect } = require('chai');

let chaiHttp = require('chai-http')
chai.use(chaiHttp);


var server = require('../app');
const { response } = require('express');

describe('Task api', function () {
    it('get user', function (done) {
        chai.request(server)
            .get('/user')
            .end((err, response)=> {
            expect(response.status).to.be.equal(200)
            // expect(response.body).to.have.all.keys('statusText','data')
            done()
        })
    })
})