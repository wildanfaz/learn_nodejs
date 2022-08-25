import path from "path"

const file = "/Users/LENOVO/halo.txt"

console.info(path.dirname(file))
console.info(path.basename(file))
console.info(path.extname(file))
console.info(path.parse(file))