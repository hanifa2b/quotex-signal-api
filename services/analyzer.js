const getMarketData = require("./marketData");
const ema = require("./ema");
const rsi = require("./rsi");
const macd = require("./macd");

async function analyze(asset = "BTCUSDT", timeframe = "1m") {
  const candles = await getMarketData(asset, timeframe);

  if (!candles.length) {
    return {
      success: false,
      message: "Market data unavailable"
    };
  }

  const closes = candles.map(c => c.close);

  const ema20 = ema(closes, 20);
  const ema50 = ema(closes, 50);
  const rsiValue = rsi(closes, 14);
  const macdValue = macd(closes);

  let signal = "WAIT";
  let trend = "SIDEWAYS";
  let confidence = 50;

  if (ema20 > ema50 && rsiValue > 55 && macdValue.macd > macdValue.signal) {
    signal = "BUY";
    trend = "UP";
    confidence = 90;
  } else if (ema20 < ema50 && rsiValue < 45 && macdValue.macd < macdValue.signal) {
    signal = "SELL";
    trend = "DOWN";
    confidence = 90;
  }

  return {
    success: true,
    signal,
    confidence,
    trend,
    indicators: {
      ema20,
      ema50,
      rsi: rsiValue,
      macd: macdValue.macd,
      macdSignal: macdValue.signal
    },
    timestamp: new Date().toISOString()
  };
}

module.exports = analyze;
