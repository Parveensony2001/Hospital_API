const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    DOB:{
        type:Date,
        required:true
    },
    mobile:{
        type:String
    },
    Address:{
        street: String,
        city: String,
        state: String,
        zipCode: String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const patient = mongoose.model('patient', userSchema);

module.exports = patient;
