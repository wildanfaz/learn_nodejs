import net from "net"

const server = net.createServer((client) => {
    console.info("Connected")

    //data diambil dari client write netclient.mjs
    client.addListener("data",(data)=>{
        //Loro
        console.info(`Assalamualaikum ${data.toString()}`)
        //Telu
        client.write(`Halo ${data.toString()}\r\n`)
    })
})
//mengamnil data koneksi dari client
server.listen(3000, "localhost")