//buffer hexadecimal
const buffer = Buffer.from("I Love You")
console.info(buffer)
console.info(buffer.toString())

buffer.reverse()
console.info(buffer.toString())

//buffer encoding
const oke = Buffer.from("I LOVE YOU", "utf-8")
console.info(oke)
console.info(oke.toString())
console.info(oke.toString("hex"))
console.info(oke.toString("base64"))

const coba = Buffer.from("SSBMT1ZFIFlPVQ==", "base64")
console.info(coba.toString("utf-8"))