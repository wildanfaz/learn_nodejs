import timers from "timers/promises"

console.info(new Date())

async function linkReceh() {
    let i = 5
    if(i > 0){
        for (i; i > 0; i--) {
            await timers.setTimeout(1000)
            console.info(i)
        }  await timers.setTimeout(500)
    }console.info("Link Di Sini")
}
//async function
linkReceh()

const nama = await timers.setTimeout(5500,"Wildan")
//sync diutamakan
console.info(new Date())
console.info(nama)

//const date = new Date()
for await (const start of timers.setInterval(1000,"cuek")) {
    console.info(`Mulai ${new Date()}`)
}