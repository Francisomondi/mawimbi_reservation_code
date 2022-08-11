const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //setting meader
    res.setHeader("Content-type", "text/html");

    res.write("<head> <link rel='stylesheet' href='style.css'></head>");
    res.write("<h2> Mawimbi Sea Food Restaurant </h2>");
    res.write("<p>this is going to be a mawimbi sea food restaurant reservation form </p>");
    res.end();


});
server.listen(3000, "localhost", () => {
    console.log("server started on port 3000");
})