const mongoose = require('mongoose');
const Car = require('../models/carModel');


const addNewCar = (req, res) => {
    const newCar = new Car(req.body.newCars);
    newCar.save((err, car) => {
        if (err) {
            res.send(err);
        }
        res.json(car);
    });
};

const updateCar = (req, res) => {
    Car.updateOne({_id: req.body.id}, {$set: {...req.body.data}}, (err, car) => {
        if (err) {
            res.send(err);
        }
        res.json(car);
    });
};

const delCar = (req, res) => {
    Car.deleteOne({_id: req.body.id}, (err, car) => {
        if (err) {
            res.send(err);
        }
        res.json(car);
    });
};


const getCars = (req, res) => {
    let data = {}
    if (req.query.mark === '' || req.query.mark ===null) {
        Car.find({}, (err, car) => {
            if (err) {
                res.send(err);
            }
            res.json(car);
        });
    } else {
        data.make = req.query.mark;
        Car.findOne(data, (err, car) => {
            if (err) {
                res.send(err);
            }
            res.json(car ? [car] : []);
        });
    }
};

module.exports = {addNewCar, getCars, updateCar, delCar};