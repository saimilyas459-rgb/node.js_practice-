import http from "http";

let quotes = [
    {
        id: 1,
        text: "Never give up",
        author: "Unknown"
    },
    {
        id: 2,
        text: "Knowledge is power",
        author: "Francis Bacon"
    }
];

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    // GET all quotes
    if (req.url === "/quotes" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(quotes));
    }

    // GET quote by ID
    else if (req.url.startsWith("/quotes/") && req.method === "GET") {

        const id = Number(req.url.split("/")[2]);

        const quote = quotes.find(q => q.id === id);

        if (quote) {
            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(quote));
        } else {
            res.writeHead(404);
            res.end("Quote Not Found");
        }
    }

    // POST new quote
    else if (req.url === "/quotes" && req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const data = JSON.parse(body);

            const newQuote = {
                id: Date.now(),
                text: data.text,
                author: data.author
            };

            quotes.push(newQuote);

            res.writeHead(201, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(newQuote));
        });
    }

    else {
        res.writeHead(404);
        res.end("Not Found");
    }

});

server.listen(3004, () => {
    console.log("Quotes API running on port 3004");
});