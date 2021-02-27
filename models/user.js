const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({


    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
        default: "12345678X",
    },
    email: {
        type: String,
        //required: true,
        //default: "eixample@eixample.com",
    },
    creationDate: {
        type: Date,
        //required: true,
        //default: new Date,
    },
    payment: {
        type: String,
        class: {
            "Tarjeta de debito": 01,
            "Tarjeta de credito": 02,
            "PayPal": 03,
        }
    }


})


const User = mongoose.model("User", userSchema);

module.exports = User;