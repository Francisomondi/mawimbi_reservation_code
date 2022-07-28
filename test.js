const reserved = (name) => {
    console.log(`Hllo ${name}, your reservation has been received`)
}
reserved("Francis")
reserved("Edna")

global.setTimeout(() => {
    console.log("this will show after 3 seconds of running this code")
}, 3000);