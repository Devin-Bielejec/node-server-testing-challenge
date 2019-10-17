const express = require("express");
const server = express();

server.use(express.json());

const db = [
    {name: "Devin"}
]

server.get("/", (req, res) => {
    res.status(200).json(db[0])
})

server.post("/", (req, res) => {
    db.push(req.body);
    res.status(200).json(db);
})

server.delete("/", (req, res) => {
    //not ideal but works
    const newDb = db.filter( item => {
        return item.name != req.body.name;
    });
    if (db.length != newDb.length) {
        res.status(200).json({message: "good to go!"});
    } else {
        res.status(404).json({message: "failed"})
    }
})

module.exports = server;