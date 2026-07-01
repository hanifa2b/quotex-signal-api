const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

    res.json({
        signal: "WAIT",
        confidence: 0,
        trend: "UNKNOWN",
        reason: "Analyzer not connected",
        indicators: {
            ema20: 0,
            ema50: 0,
            rsi: 0,
            macd: 0,
            macdSignal: 0
        },
        timestamp: new Date().toISOString()
    });

});

module.exports = router;
