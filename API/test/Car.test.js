const chai = require('chai');
const chaiHttp = require('chai-http')
const server = 'localhost:3001'
const should = chai.should();
var expect = require('chai').expect


chai.use(chaiHttp);

describe('Car get request', function () {
    context('checking the get request', function () {
        it('it should get all cars', function () {
            chai.request(server)
                .get('/car')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res).to.be.a('object')

                });
        });
    })
})

describe('Car post request', () => {
    it('it should not POST a car without required fields', (done) => {
        let car = {
            rego: "The Lord of the Rings",
            model: "J.R.R. Tolkien",
            year: 1954
        }
        chai.request(server)
            .post('/car')
            .send(car)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body.name).to.equal('ValidationError')
                done();
            });
    });
});