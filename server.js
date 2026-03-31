const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // serve files

// 🌐 SHOW WEBSITE
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 🔗 CONNECT TO MYSQL (Railway)
const db = mysql.createConnection({
    host: "hopper.proxy.rlwy.net",
    user: "root",
    password: "drqwALGhesedyatEoBxsNneMJVxMaFFv",
    database: "railway",
    port: 33426
});

// CONNECT
db.connect((err) => {
    if (err) {
        console.log("❌ DB Connection failed:", err);
    } else {
        console.log("✅ MySQL Connected");
    }
});

// 📦 CREATE TABLE
db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        message TEXT
    )
`);

// 📩 SAVE FORM
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error saving data");
        }

        res.send("Message saved successfully 💜");
    });
});

// 🚀 IMPORTANT FOR RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});