function calculateEMA(prices, period) {

    if (!prices || prices.length < period) {
        return null;
    }

    const multiplier = 2 / (period + 1);

    let ema = prices[0];

    for (let i = 1; i < prices.length; i++) {
        ema = (prices[i] - ema) * multiplier + ema;
    }

    return Number(ema.toFixed(5));
}

module.exports = {
    calculateEMA
};
