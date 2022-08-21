const express = require("express");
const router = express.Router()
const mongoose = require("mongoose");
const Reservation = require("../models/reservation");

// reservation routes
//route to create reservation form
router.get("/create", (req, res) => {
    res.render("create", {
        title: "create reservation"
    });
});

router.get("/reservations", (req, res) => {
    Reservation.find().sort({
            createdAt: -1
        })

        .then((result) => {
            res.render("index", {
                title: "All Reservations",
                reservations: result
            });

        })
        .catch((err) => {
            console.log(err)
        });
});
//get all reservations
router.post("/reservations", (req, res) => {
    const reservation = new Reservation(req.body);
    reservation.save()
        .then((result) => {
            res.redirect("/reservations");
        })
        .catch((err) => {
            console.log(err)
        });
});

//get single reservation
router.get("/:id", (req, res) => {

    //const id = req.params.id;
    const id = mongoose.Types.ObjectId(req.params.id.trim());
    Reservation.findById(id)
        .then(result => {
            res.render("details", {
                reservation: result,
                title: "Reservation Details"
            });
        })
        .catch((err) => {
            console.log(err)
        });

});

module.exports = router;