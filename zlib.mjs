import fs from "fs";
import zlib from "zlib";

//gzip
const source = fs.readFileSync("zlib.mjs")
console.info(source.toString())
const hasil = zlib.gzipSync(source)
console.info(hasil.toString())

//write
fs.writeFileSync("zlib.mjs.txt", hasil)

//unzip
const read = fs.readFileSync("zlib.mjs.txt")
const unzip = zlib.unzipSync(read)
console.info(unzip.toString())