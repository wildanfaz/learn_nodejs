import http from "http"

const server = http.createServer((request, response) => {
    console.info(request.method)
    console.info(request.url)
    // console.table(request.headers)

    // if(request.url === "/wildan") {
    //     response.write("Haloo Wildan")
    // } else {
    //     response.write("Haloo")
    // }

    if(request.method === "POST") {
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json")
            response.write(data)
            response.end()
        })
    } else {
        if(request.url === "/wildan") {
            response.write("Haloo Wildan")
        } else {
            response.write("Haloo")
        }
        response.end()
    }

})

server.listen(3000)