const chai = require('chai');
const chaiHttp = require('chai-http')
const app = 'localhost:3001'


var expect = chai.expect
// Configure chai
chai.use(chaiHttp);


const Payment = require('../src/models/paymentModel');



describe('Testing payments Model and their routes', () => {

  it('Creates a payment', (done) => {
    const newPayment = new Payment({ userId: 'test_userId', payerId: "test_payerId", paymentId: "test_paymentId" });
    newPayment.save(function (err) {
      if (err) done(err);
      else done();
    });

  });

  it('Tries to create a payment without userId', (done) => {
    const newPayment = new Payment({payerId: "test_payerId", paymentId: "test_paymentId" });
    newPayment.save(function (err) {
      if (err){
        expect(err['name']).to.be.a('string', 'ValidationError');
        done()
      }
      else {
        done(new Error("This should not Work"))
      }

    });

  });

  it('Sends a request to payments route', (done) => {
    chai.request(app)
      .get('/savepayment')
      .end((err, res) => {
        expect(200);
        expect(res).to.be.an('object')
        done();
      });

  });

});