const express = require("express");
const router = express.Router();

const { analyzeSignal } = require("../services/analyzer");

router.get("/", async (req, res) => {

    // Demo indicator values
    const indicators = {
        ema20: 1.1050,
        ema50: 1.1020,
        rsi: 61,
        macd: 0.0032,
        macdSignal: 0.0021
    };

    const result = analyzeSignal(indicators);

    res.json({
        success: true,
        signal: result.signal,
        confidence: result.confidence,
        trend: result.trend,
        indicators,
        timestamp: new Date().toISOString()
    });

});

module.exports = router;
