const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    guests: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    request: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;