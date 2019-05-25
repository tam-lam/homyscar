//inside create_test.js

const assert = require('assert');
const User = require('../src/models/userModel');
const Car = require('../src/models/carModel');
const Rental = require('../src/models/rentalModel');
const Confirmation = require('../src/models/confirmationModel');



describe('Creating users', () => {
        
    it('Creates a user', (done) => {
        //assertion is not included in mocha so 
        //require assert which was installed along with mocha
        
        const user = new User({ username: 'testUser2' , email: "testing2@example.com" , password: "uniquepassword123"});
        user.save(function(err) {
                if (err) done(err);
                else done();
              });

    });

    it('Creates a car', (done) => {
        //assertion is not included in mocha so 
        //require assert which was installed along with mocha
        const car = new Car({ rego: 'XYZ123' , model: "mitsi" , year: "2015" , make: "mitsub" , body: "sedan" , transmission : "Auto" , availability: "true" , damaged: "false" , address: "whatever" , price: "1254" , lat: "34234" , lng: "34324" });
        car.save() //takes some time and returns a promise
            .then(() => {
                assert(!car.isNew); //if user is saved to db it is not new
                done();

            }).catch(done);

    });

    it('Creates a rental' , (done) => {
        const rental = new Rental({ rental_id: "iduniq" , user_id: "2334" , car_rego: "XYZ123" , booking_date: "12/06/2018" , return_date:"12/09/2019" , return_location: "location" , total_price: "2312"})
        rental.save()
        .then( () => {
                assert(!rental.isNew);
                done();
        }).catch(done);
    });

    it('Dont save incorrect user to database', (done) => {
        //Attempt to save with wrong info. An error should trigger
        var wrongUser = User({
          notusername: 'Not valid'
        });
        wrongUser.save(err => {
          if(err) { return done(); }
          throw new Error('Should generate error!');
        })
      });

      it('Dont save incorrect rental to database', (done) => {
        //Attempt to save with wrong info. An error should trigger
        var wrongRental = Rental({
          rental: 'Not valid'
        });
        wrongRental.save(err => {
          if(err) { return done(); }
          throw new Error('Should generate error!');
        })
      });

      it('Dont save incorrect car details to database', (done) => {
        //Attempt to save with wrong info. An error should trigger
        var wrongCar = Car({
          rego: 'Not valid'
        });
        wrongCar.save(err => {
          if(err) { return done(); }
          throw new Error('Should generate error!');
        })
      });

      it('Dont save if incorrect ammount of password length', (done) => {
        //Attempt to save with wrong info. An error should trigger
        var wrongPasswordLength = User({
          username: 'valid username',
          password: 'short'

        });
        wrongPasswordLength.save(err => {
          if(err) { return done(); }
          throw new Error('Should generate error!');
        })
      });

      it('Creates a confirmation record' , (done) => {

        var correctConfirmation = Confirmation({
          rego: 'ABC123',
          user_id: '12345'
        });

        correctConfirmation.save()
        .then( () => {
          assert( !correctConfirmation.isNew);
          done()
        }).catch(done);

      });

      it('Should not create a confirmation record with no rego provided' , (done) => {
          var wrongConfirmation = Confirmation({
            user_id: '23456'
          });

          wrongConfirmation.save(err => {
            if (err) { return  done();}
            throw new Error('Should generate Error');
          });


      });



});