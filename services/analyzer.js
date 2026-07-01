function analyzeSignal(indicators) {

    const {
        ema20,
        ema50,
        rsi,
        macd,
        macdSignal
    } = indicators;

    if (
        ema20 > ema50 &&
        rsi > 55 &&
        macd > macdSignal
    ) {

        return {
            signal: "BUY",
            confidence: 90,
            trend: "UP"
        };

    }

    if (
        ema20 < ema50 &&
        rsi < 45 &&
        macd < macdSignal
    ) {

        return {
            signal: "SELL",
            confidence: 90,
            trend: "DOWN"
        };

    }

    return {
        signal: "WAIT",
        confidence: 60,
        trend: "SIDEWAYS"
    };

}

module.exports = {
    analyzeSignal
};
