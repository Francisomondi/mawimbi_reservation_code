const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const reservationRoute = require("./Routes/reservationRoutes")




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

//reservation routes
app.use(reservationRoute)

//404 page
app.use((req, res) => {
    res.status(404).render("404", {
        title: "404"
    });
});