const Rental = require('../models/rentalModel');

const addNewRental = (req, res) => {
  let newRental = new Rental(req.body);
  newRental.on_rent = true;
  newRental.save((err, Rental) => {
    if (err) {
      res.send(err);
    }
    res.json(Rental);
    
  });
};

const getRentals = (req, res) => {
  Rental.find({}, (err, rental) => {
    if (err) {
      res.send(err);
    }
    res.json(rental);
  });
};

const getUserRentals = (req, res) => {

  var required_user_id = req.query.user_id
  console.log('user id is ' , required_user_id)

  Rental.find({ user_id: required_user_id }, (err, rental) => {
    if (err) {
      res.send(err);
    }
    res.json(rental);
  });
};

const updateRental = (req , res) => {

    var update_rental_data = req.body.data
    var rental_id = req.body.data.rental_id




    Rental.findByIdAndUpdate({_id: rental_id}, {$set:update_rental_data} , ( err , confirmation) =>{
            if (err) {
                    res.send(err);
                    
            }
            console.log('successful update' , rental_id);
            res.json(res.status)
    });
}

module.exports = { addNewRental, getRentals, getUserRentals , updateRental};