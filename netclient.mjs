import net from "net";

//membuat koneksi untuk server
const client = net.createConnection({
    port: 3000,
    host: "localhost"
})

//data diambil dari client write server.mjs
client.addListener("data", (data) => {
    //Papat
    console.info(`Menerima Data ${data}`)
})

//write diterima oleh listener "data"
setInterval(() => {
    //Siji
    client.write(`${process.argv[2]}\r\n`)
}, 2000)