const express = require("express");
const cors = require("cors"); // Allow frontend to talk to backend
const app = express();

app.use(cors()); // Enable CORS (important!)
app.use(express.json()); // Parse JSON data

app.post("/update-ball", (req, res) => {
    console.log("Ball moved to:", req.body); // ✅ Check if data is received
    res.sendStatus(200);
});

const PORT = 7000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


