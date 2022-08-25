import {threadId, Worker} from "worker_threads"

//jalan parallel tidak ada jaminan urutan
const worker1 = new Worker("./worker.mjs")
const worker2 = new Worker("./worker.mjs")

//enem
worker1.addListener("message", (message) => {
    console.info(`Thread ${threadId} ingfo diterima worker 1 pesan ${message}`)
})

//pitu
worker2.addListener("message", (message) => {
    console.info(`Thread ${threadId} ingfo diterima worker 2 pesan ${message}`)
})


//siji
worker1.postMessage(10)
worker2.postMessage(10)
//wolu hasil console
