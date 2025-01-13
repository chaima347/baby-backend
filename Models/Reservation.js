 // Import required modules
 const mongoose = require('mongoose');
 const { Schema } = mongoose;

const Reservation = new Schema({
    id  : {
        type: String,
        required: true
    } , 
    date : {
        type: Date,
        required: true
    },
    time : {
        type: String,
        required: true
    } ,
    babysitter : {
        type: Schema.Types.ObjectId,
        ref: 'Babysitter',
        required: true
    },
    parent : {
        type: Schema.Types.ObjectId,
        ref: 'Parent',
        required: true
    },
    status : {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    } , 
    description : {
        type: String,
        required: true
    }
    , 
    totale : {
        type: Number,
        required: true
    } 
});

module.exports = mongoose.model('Reservation', Reservation);

