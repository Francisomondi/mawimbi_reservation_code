const fs = require("fs")

const readStream = fs.createReadStream("./docs/blog.txt")
const writeStream = fs.createWriteStream("./docs/blog1.txt")

readStream.on("data", (chunk) => {
    console.log("-------------new chunk-----------")
    console.log(chunk.toString())

    writeStream.write("\nNew chunkn\n")
    writeStream.write(chunk)
})