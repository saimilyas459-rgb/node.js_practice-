
const url = new URL(
    "http://localhost:3000/search?q=react&limit=10"
);

console.log("Path:", url.pathname);
console.log("Search query:", url.searchParams.get("q"));
console.log("Limit:", url.searchParams.get("limit"));
