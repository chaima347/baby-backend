const express = require('express');
const mongoose = require('mongoose');

const Evaluation = new mongoose.Schema({
    id  : {
       type : String , 
       required : true

    } , 
    babysitter: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Babysitter' },
    parent: { type: mongoose.Schema.Types.ObjectId,
         ref: 'Parent' },
    note: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }  , 
    commentaire : {
        type: String,
        required: true

    } 
});
module.exports = mongoose.model('Evaluations', Evaluation); 


