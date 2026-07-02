const express = require("express");
const router = express.Router();

const analyze = require("../services/analyzer");

router.get("/", async (req, res) => {
  try {
    const asset = req.query.asset || "BTCUSDT";
    const timeframe = req.query.timeframe || "1m";

    const result = await analyze(asset, timeframe);

    res.json(result);
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;
