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
app.use(express.static("public"));

//mongoose and  mongo sandbox routes
//saving reservations to mondodb
app.get("/add-reservation", (req, res) => {
    const reservation = new Reservation({
        firstname: "jeremy",
        lastname: "Oguda",
        email: "geremyoguda@gmail.com",
        guests: "7",
        date: "09/12/2022",
        time: "11:45",
        country: "Kenya",
        Phone: "0740694770",
        request: "parte after parte"
    });
    reservation.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});
//fetching all reservations
app.get("/all-reservations", (req, res) => {
    Reservation.find()
        .then((result) => {
            res.send(result)

        })
        .catch((err) => console.log(err));
});

//finding single reservation

app.get("/single-reservation", (req, res) => {
    Reservation.findById("62fcf26a9d0908cfb2746cc8")
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})



//home route
app.get("/", (req, res) => {
    const reservations = [{
            firstname: "Francis",
            email: "Francisomondi17@gmail.com",
            time: "!0:45",
            phone: "0740694770",
            request: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors"
        },
        {
            firstname: "Oscar",
            email: "OsooOscar@gmail.com",
            time: "10:45",
            phone: "0740694770",
            request: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors"
        },
        {
            firstname: "Edna Odongo",
            email: "Ednaodongothe1st@gmail.com",
            time: "11:45",
            phone: "0700000111",
            request: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors"
        },
        {
            firstname: "Fredrick Ochieng",
            email: "Fredochiepapa@gmail.com",
            time: "13:45",
            phone: "0759347325",
            request: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors"
        },
    ];

    res.render("index", {
        title: "Home",
        reservations: reservations
    });
});
//about route
app.get("/about", (req, res) => {

    res.render("about", {
        title: "About",

    });
});

//create reservation
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