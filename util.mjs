import util from "util";

const nama = "Wildan"
const nick = "Shiro"

console.info(`Halo ${nama} ${nick}`)
console.info(util.format("Halo %s %s", nama, nick))

const namaku = {
    depan: "Muhamad",
    tengah: "Wildan"
}

console.info(`Namaku ${JSON.stringify(namaku)}`)
console.info("Namaku %j", namaku)


