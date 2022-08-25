import {EventEmitter} from "events"

const emitter = new EventEmitter()

//listener mendapat data dari emit
emitter.addListener("Halo", (nama) => {
    console.info(`Halo nama saya ${nama}`)
})
//("namaevent","isi event")
emitter.emit("Halo", "Muhamad Wildan Faz")