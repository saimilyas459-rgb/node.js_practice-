import http from "http";

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url === "/api/status") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            status: "success",
            message: "Hello from Node.js"
        }));

    } else {
        res.writeHead(404);
        res.end("Not Found");
    }

});

server.listen(3003, () => {
    console.log("CORS server running on port 3003");
});