const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const orderSchema = new Schema({


    idUser: {
        type: ObjectId,
        required: true,
    },
    idFilm: {
        type: ObjectId,
        required: true,
    },
    dateOrderInitial: {
        type: Date,
        default: new Date,
    },
    dateOrderFinish: {
        type: Date,
        default: new Date(+new Date() + 2 * 24 * 60 * 60 * 1000)
    }
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;