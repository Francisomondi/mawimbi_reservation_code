const express = require("express");


const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
    //res.send("<h1>Home Page</h1> ");
    res.render("index");
});

app.get("/about", (req, res) => {
    //res.send("<h1>About Page</h1> ");
    res.render("about")
});

//create reservation
app.get("/reservation/create", (req, res) => {
    res.render("create")
})
//404 page
app.use((req, res) => {
    res.status(404).render("404");
});