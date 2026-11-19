
import path from "node:path";
import os from "node:os";

const filePath = path.join("data", "notes.json");

console.log("Joined path:", filePath);
console.log("File extension:", path.extname("notes.json"));
console.log("Operating system:", os.platform());
console.log("CPU cores:", os.cpus().length);
console.log("Home directory:", os.homedir());
