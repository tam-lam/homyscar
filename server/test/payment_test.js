const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http')
const should = chai.should;
// const app = require('../index')
const app = 'localhost:3001'


var expect = chai.expect
// Configure chai
chai.use(chaiHttp);


const Payment = require('../src/models/paymentModel');



describe('Testing payments Model and routes', () => {

  it('Creates a payment', (done) => {
    //assertion is not included in mocha so 
    //require assert which was installed along with mocha

    const newPayment = new Payment({ userId: 'test_userId', payerId: "test_payerId", paymentId: "test_paymentId" });
    newPayment.save(function (err) {
      if (err) done(err);
      else done();
    });

  });

  it('Sends a request to payments route', (done) => {
    //assertion is not included in mocha so 
    //require assert which was installed along with mocha

    chai.request(app)
      .get('/savepayment')
      .end((err, res) => {
        expect(200);
        expect(res).to.be.an('object')
        done();
      });

  });

  // it('Checks if the success redirects you', (done) => {
  //   //assertion is not included in mocha so 
  //   //require assert which was installed along with mocha

  //   chai.request(app)
  //     .get('/success')
  //     .end((err, res) => {
  //       expect(200);
  //       expect(res).to.redirect;
  //       done();
  //     });

  // });

});