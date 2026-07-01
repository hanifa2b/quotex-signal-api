const axios = require("axios");

async function getMarketData(symbol = "EURUSD") {

    return {

        symbol: symbol,

        candles: [

            {
                open: 1.1000,
                high: 1.1020,
                low: 1.0990,
                close: 1.1015
            }

        ]

    };

}

module.exports = {

    getMarketData

};
