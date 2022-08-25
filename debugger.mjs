//node inspect namafile
//node inspect debugger.mjs
//watch("haloNama") mengecek isi parameter
function sayHello(haloNama) {
    debugger
    return `Halo ${haloNama}`
}

const namaku = "Wildan"
debugger
console.info(sayHello(namaku))