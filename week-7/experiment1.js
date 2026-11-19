import http from "http";

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");

    } else if (req.url === "/api/status" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok" }));

    } else {
        res.writeHead(404);
        res.end("Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});