function calculateRSI(prices, period = 14) {

    if (!prices || prices.length <= period) {
        return null;
    }

    let gains = 0;
    let losses = 0;

    for (let i = 1; i <= period; i++) {

        const diff = prices[i] - prices[i - 1];

        if (diff > 0) {
            gains += diff;
        } else {
            losses += Math.abs(diff);
        }

    }

    const avgGain = gains / period;
    const avgLoss = losses / period;

    if (avgLoss === 0) {
        return 100;
    }

    const rs = avgGain / avgLoss;

    return Number((100 - (100 / (1 + rs))).toFixed(2));

}

module.exports = {
    calculateRSI
};
