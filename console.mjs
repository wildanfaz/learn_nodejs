import {Console} from "console"
import fs from "fs"

const logfile = fs.createWriteStream("app.log")

const log = new Console({
    stdout: logfile,
    stderr: logfile
})

log.info("Halo")
log.error("Error")

const nama = {
    depan: "Muhamad",
    tengah: "Wildan"
}
log.table(nama)