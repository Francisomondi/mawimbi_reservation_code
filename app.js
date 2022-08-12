const express = require("express");


const app = express();

app.set("view engine", "ejs");

app.listen(3000);
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
app.get("/reservation/create", (req, res) => {
    res.render("create", {
        title: "create reservation"
    })
})
//404 page
app.use((req, res) => {
    res.status(404).render("404", {
        title: "404"
    });
});