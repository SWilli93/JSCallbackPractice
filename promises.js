import fs from "node:fs/promises";
import fsc from "node:fs";

fs.readFile('./data.json', 'utf-8')
    .then(data => {
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Complete");
    })
    .then(() => readFile("data.json"))
    .then(data => console.log(data))
    .catch(err => {
        console.log("Could not complete loading and parsing.");
        throw err;
    });

    const readFile = async (filename) => {
        return new Promise((resolve, reject) => {
            fsc.readFile('data.json', 'utf-8', (err, data) => {
                if(err) {
                    reject(err);
                }
                resolve(data);
            })
        });
    }

