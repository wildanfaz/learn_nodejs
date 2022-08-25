import dns from "dns/promises"
//promise await
const ip = await dns.lookup("www.youtube.com")
console.info(ip.address)
console.info(ip.family)
