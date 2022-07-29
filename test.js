const reserved = (name) => {
    console.log(`Hello ${name}, your reservation has been received`)
}
reserved("Francis")
reserved("Edna")

setTimeout(() => {
    console.log("this will show after 3 seconds of running this code")
}, 3000);

console.log(__dirname)
console.log(__filename)