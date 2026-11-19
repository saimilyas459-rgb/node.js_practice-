
import { readFile, writeFile } from "fs/promises";

async function loadNotes() {
    try {
        const text = await readFile("notes.json", "utf-8");
        return JSON.parse(text);
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }
        throw error;
    }
}

async function saveNotes(notes) {
    await writeFile(
        "notes.json",
        JSON.stringify(notes, null, 2)
    );
}

async function main() {
    const notes = await loadNotes();

    notes.push({
        id: Date.now(),
        text: "Learn Node.js file system",
        createdAt: new Date().toISOString()
    });

    await saveNotes(notes);

    console.log("Notes saved successfully:");
    console.log(notes);
}

main().catch((error) =>
    console.error("Error:", error.message)
);
