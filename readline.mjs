import process from "process"
import readline from "readline"

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//ini query
input.question("Siapa Nama Kamu?",(nama) => {
    console.info(`Halo ${nama}`)
    input.close()
})