import fs from "fs";

//stream turunan event emitter
const writer = fs.createWriteStream("target.log")
writer.write("Halo\n")
writer.write("Wildan")
writer.end()

const reader = fs.createReadStream("target.log")
// reader.read()
//callback menerima output dari data sebelumnya
//data event dari target.log
reader.addListener("data", (tes) => {
    console.info(tes.toString())
})