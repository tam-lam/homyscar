const chai = require('chai');
const chaiHttp = require('chai-http')
const server = 'localhost:3001'
var expect = require('chai').expect


chai.use(chaiHttp);

describe('Car get request', () => {
    it('it should get all cars', ()=> {
        chai.request(server)
            .get('/car')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res).to.be.a('object')
            });
    });
})