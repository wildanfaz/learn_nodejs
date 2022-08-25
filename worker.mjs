import {threadId, parentPort} from "worker_threads"

//loro
parentPort.addListener("message", (message) => {
    for(let i = 1; i <= message; i++) {
        //telu
        console.info(`ThreadId ${threadId} send ${i}`)
        //papat
        parentPort.postMessage(i)
    }
    //lima
    parentPort.close()
})