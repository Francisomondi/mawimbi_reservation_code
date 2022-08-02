const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    res.setHeader("content-type", "text/html")
    res.write("<h1>hello Francis</h1>")
    res.write("<p>this is where all the frontend html is displayed</p>")
})
server.listen(3000, "localhost", () => {
    console.log("server started on port 3000")
})