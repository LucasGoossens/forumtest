import { fakeDb } from "./db.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json()); 
app.use(cors());

app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));

app.get("/", (req, res) => {
    res.send(fakeDb);
});