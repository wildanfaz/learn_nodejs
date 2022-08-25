function tesPromise() {
    return Promise.resolve("Halo")
}

//.js perlu menambah async function
//.mjs tidak perlu
//promise async await
async function halo() {
    const halo = await tesPromise()
    console.info(halo)
}

halo()