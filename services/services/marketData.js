const axios = require("axios");

async function getMarketData(asset = "BTCUSDT", interval = "1m") {
  try {
    const url = `https://api.binance.com/api/v3/klines?symbol=${asset}&interval=${interval}&limit=100`;

    const response = await axios.get(url);

    return response.data.map(candle => ({
      open: parseFloat(candle[1]),
      high: parseFloat(candle[2]),
      low: parseFloat(candle[3]),
      close: parseFloat(candle[4]),
      volume: parseFloat(candle[5])
    }));

  } catch (err) {
    console.error(err.message);
    return [];
  }
}

module.exports = getMarketData;
