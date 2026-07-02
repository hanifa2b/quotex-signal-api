module.exports = {
  assets: {
    EURUSD: "EUR/USD",
    GBPUSD: "GBP/USD",
    USDJPY: "USD/JPY",
    AUDUSD: "AUD/USD",
    USDCAD: "USD/CAD",
    NZDUSD: "NZD/USD",
    EURJPY: "EUR/JPY",
    XAUUSD: "XAU/USD",
    BTCUSDT: "BTCUSDT",
    ETHUSDT: "ETHUSDT"
  },

  timeframes: {
    "1m": "1m",
    "5m": "5m",
    "15m": "15m"
  },

  signal: {
    emaFast: 20,
    emaSlow: 50,
    rsiPeriod: 14,
    macdFast: 12,
    macdSlow: 26,
    macdSignal: 9
  }
};
