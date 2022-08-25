import {URL} from "url";

const link = new URL("https://instagram.com/wildan_faz")

console.info(link.toString())
console.info(link.href)
console.info(link.protocol)
link.host = "mantap"
console.info(link.host)
console.info(link.pathname)
link.searchParams.append("IG", "Wildan")
console.info(link.searchParams)