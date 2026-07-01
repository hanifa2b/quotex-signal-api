function round(value, decimals = 5) {
    return Number(value.toFixed(decimals));
}

function isBullish(ema20, ema50) {
    return ema20 > ema50;
}

function isBearish(ema20, ema50) {
    return ema20 < ema50;
}

module.exports = {
    round,
    isBullish,
    isBearish
};
