const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //setting meader
    fs.readFile("./views/index.html", (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {

            res.end(data);
        }
    })


});
server.listen(3000, "localhost", () => {
    console.log("server started on port 3000");
})