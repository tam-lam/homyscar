const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const EXPIRATION_TIME_SECONDS = '60m';

const ConfirmationSchema = new Schema({

    rego : {
        type: String,
        required: true,
    },
    user_id: {
        type: String ,
        required: true,
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: EXPIRATION_TIME_SECONDS}
    }
},
{
    timestamps: true,
}

);
module.exports = mongoose.model('Confirmation' , ConfirmationSchema );

