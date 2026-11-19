import http from "http";
import { createReadStream } from "fs";

const server = http.createServer((req, res) => {

    if (req.url === "/download") {

        const stream = createReadStream("./big-file.txt");

        stream.pipe(res);

    } else {
        res.end("Open /download to read file");
    }

});

server.listen(3002, () => {
    console.log("Server running on port 3002");
});