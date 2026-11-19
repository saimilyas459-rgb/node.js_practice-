import http from "http";

const server = http.createServer((req, res) => {

    if (req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const parsed = JSON.parse(body);

            res.writeHead(200, {
                "Content-Type": "text/plain"
            });

            res.end(`Received: ${parsed.name}`);

        });

    } else {
        res.end("Send a POST request");
    }

});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});