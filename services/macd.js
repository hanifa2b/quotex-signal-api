const { calculateEMA } = require("./ema");

function calculateMACD(prices) {

    if (!prices || prices.length < 35) {
        return null;
    }

    const ema12 = calculateEMA(prices, 12);
    const ema26 = calculateEMA(prices, 26);

    if (ema12 === null || ema26 === null) {
        return null;
    }

    const macd = ema12 - ema26;

    return {
        macd: Number(macd.toFixed(5)),
        signal: 0,
        histogram: 0
    };
}

module.exports = {
    calculateMACD
};
