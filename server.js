const express = require("express");
const cors = require("cors");

const signalRoute = require("./routes/signal");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/signal", signalRoute);

app.get("/", (req, res) => {
    res.json({
        name: "Quotex Professional Signal API",
        status: "Running"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
