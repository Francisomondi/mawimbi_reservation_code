const people = require("./people");
const os = require("os");
const fs = require("fs");

fs.readFile("./docs/text.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toLocaleString());
});
fs.writeFile("./docs/text1.txt", "this is a new file", () => {
  console.log("file was writen to successfully");
});

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", err => {
    if (err) {
      console.log("Error making this directiory");
    }
    fs.writeFile(
      "./assets/text2.txt",
      "francis has made made a reservatuon",
      () => {
        console.log("successsssssss");
      }
    );
  });
} else {
  fs.rmdir("./assets", err => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

console.log(people);
console.log(os.platform());
