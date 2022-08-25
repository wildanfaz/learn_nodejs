import process from "process"

//return exit manjing exitCode
process.addListener("exit", (exitCode) => {
    console.info(`Kode Exit ${exitCode}`)
})

console.info(process.version)
console.table(process.argv)
console.table(process.report)
console.table(process.env)

process.exit("Metu")

console.info("Tidak Keluar")