 // Import required modules
 const mongoose = require('mongoose');
 const { Schema } = mongoose;
 
 
 
 const Babysitter = new Schema({
     id  : {
         type: String,
         required: true,
         unique: true
     } , 
     name: {
         type: String,
         required: true
     },
     age: {
         type: Number,
         required: true
     } , 
     email: {
         type: String,
         required: true
     
     } , 
     password: {
         type: String,
         required: true
     } ,
     contact : {
         type: String,
         required: true
     } , 
 
 
     adresse : {
         type: String,
         required : true ,
     } ,
     photo : {
         type: String,
         required : true
     } 
     , 

    tarif: {
         type: Number,
        required : true
        } ,
    experience: {
        type: Number,
        required : true
        } ,
    competances : {
        type: String,
        required : true
        } ,
    disponibilite : {
        type: Boolean,
        required : true
        } ,
  
});


 module.exports = mongoose.model('BabySitters', Babysitter);
 