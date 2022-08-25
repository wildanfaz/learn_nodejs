import https from "https"

const endpoint = "https://requestinspector.com/inspect/01g71xze2gce6e8kc3v22eqgw6"
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Data Diterima Bang ${data.toString()}`)
    })
})

const body = JSON.stringify({
    depan: "Muhamad",
    tengah: "Wildan",
})
request.write(body)
request.end()