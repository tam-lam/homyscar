const paypal = require('paypal-rest-sdk');
const Payment = require('../models/paymentModel');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AbqSO9fDZ0fD_DsNRMLaENdnNTruVeHYj6nh6RJjqjkTYWRwDAfVYJWA4PDGfRy_4iWItAg630htlr1K',
  'client_secret': 'EG_iIjJKuQSnPPk4XfY-qhQSocNhxaxQsW2hWASPQgvuP2phaPeEH2Ni2KWO1l_sdbG_ULHdWyY0IxOC'
});

const payment = (req, res) => {

  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": `https://damp-wildwood-73011.herokuapp.com/user?rego=${req.body.rego}&userId=${req.body.user_id}&price=${req.body.price}`,
      "cancel_url": "https://damp-wildwood-73011.herokuapp.com/cancel"
    },
    "transactions": [{
      // "item_list": {
      //   "items": [{
      //     "name": "CAR",
      //     "sku": "001",
      //     "price": "15.00" ,
      //     "currency": "AUD",
      //     "quantity": 2
      //   }]
      // },
      "amount": {
        "currency": "AUD",
        "total": "100.00"
      },
      "description": "Renting a Car"
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for (i = 0 ; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
};

const success = (req, res) => {
  
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  var totalPrice = req.query.totalPrice;
  var total_hours = 2

  
  totalPrice = Math.round(totalPrice)

  totalPrice = totalPrice + 20

  console.log("PRICEEEEEEEEE AFTER")
  console.log(totalPrice)

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
      "amount": {
        "currency": "AUD",
        "total": totalPrice
      }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log("Get Payment Response");
      console.log(JSON.stringify(payment, undefined, 2));
      res.redirect("http://localhost:3000/")
    }
  });
}

const savePayment = (req, res) => {
  let newPayment = new Payment(req.body);
  newPayment.save((err, payment) => {
    if (err) {
      res.send(err);
    }
    res.json(payment);
  });
}

const getAllPayments = (req, res) => {
  Payment.find({}, (err, payments) => {
    if (err) {
      res.send(err);
    }
    res.json(payments);
  });
}

module.exports = { payment, success, savePayment, getAllPayments };