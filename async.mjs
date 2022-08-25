function tesPromise() {
    return Promise.resolve("Halo")
}
//function mjs async
//.mjs langsung saja simpan ke variabel dengan menambah await
//return promise bisa ditambahkan await
//promise await
const halo = await tesPromise()
console.info(halo)
console.info("halo")