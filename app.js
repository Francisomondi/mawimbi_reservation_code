const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Reservation = require("./models/reservation");




const app = express();

//connecting to the database
const dbURI = "mongodb+srv://francis:1234@mawimbireservation.42akk5x.mongodb.net/MawimbiReservation?retryWrites=true&w=majority";
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useunifiedTopology: true
}).then((result) => app.listen(3000)).catch((err) => console.log(err));

app.set("view engine", "ejs");



//middleware/static files
app.use(morgan("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));

//mongoose and  mongo sandbox routes
//saving reservations to mondodb

//home route
app.get("/", (req, res) => {
    res.redirect("/reservations")
});
//about route
app.get("/about", (req, res) => {

    res.render("about", {
        title: "About",

    });
});

// reservation routes
app.get("/reservations", (req, res) => {
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
app.post("/reservations", (req, res) => {
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
app.get("/:id([0-9a-fA-F]{24})", (req, res) => {

    //const id = req.params.id;
    const id = mongoose.Types.ObjectId(req.params.id.trim());
    Reservation.findById(id)
        .then(result => {
            res.render("details", {
                reservation: result,
                title: "Reservation Details"
            });
        })

})
//route to create reservation form
app.get("/create", (req, res) => {
    res.render("create", {
        title: "create reservation"
    });
});
//404 page
app.use((req, res) => {
    res.status(404).render("404", {
        title: "404"
    });
});