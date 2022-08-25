import fs from "fs/promises"

const buffer = await fs.readFile("filesystem.mjs")

console.info(buffer.toString())

fs.writeFile("halo.txt", "Halo")