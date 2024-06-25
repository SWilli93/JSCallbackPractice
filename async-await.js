import fs from "node:fs/promises";

async function loadData() {
    try {
        const data = await fs.readFile('./data.json', "utf-8");
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Complete");
    } catch (err) {
        console.log("Could not load and parse file");
        throw err;
    }
}

loadData().then(() => console.log("Promise Completed"));