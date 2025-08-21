const stockPortfolio = {
    apiKey: "4JLIGNYBOQW85YO1",
    holdings : [],
    
    addStock: function(symbol, shares) {
    let existing = this.holdings.find(stock => stock.symbol === symbol);
        if (existing) {
            existing.shares += shares;
            console.log(`You now have ${existing.shares} shares of ${symbol}.`);
        } else {
            this.holdings.push({symbol, shares});
            console.log(`${shares} shares of ${symbol} added to your portfolio.`);
        }
    },

    removeStock: function(symbol, shares) {
        let existing = this.holdings.find(stock => stock.symbol === symbol);
         if (!existing) {
            console.log(`${symbol} not found in portfolio.`);
            return;
            }
        if (existing) {
            if (existing.shares < shares) {
                console.log(`You only have ${shares} shares of ${symbol}.`);
            } else if (existing.shares === shares) {
                existing.shares = 0;
                console.log(`You have sold all your shares of ${symbol}.`);
            } else {
                existing.shares -= shares;
                console.log(`You have ${existing.shares} of ${symbol} left in your portfolio.`);
            }
        }
    },

    listHoldings: function(){
        console.log(this.holdings)
    },

calculateTotalValue: async function() {
    let total = 0;

    console.log("\n📊 Portfolio Breakdown:");
    console.log("--------------------------");

    for (let stock of this.holdings) {
        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=${this.API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            let priceStr = data?.["Global Quote"]?.["05. price"];
            let price = Number(priceStr) || 0;
            let value = stock.shares * price;
            total += value;

            console.log(`${stock.symbol}: ${stock.shares} shares @ $${price.toFixed(2).toLocaleString()} = $${value.toFixed(2).toLocaleString()}`);
        } catch (err) {
            console.log(`Failed to fetch price for ${stock.symbol}: ${err.message}`);
        }
    }

    console.log("--------------------------");
    console.log(`💰 Total Portfolio Value: $${total.toFixed(2)}\n`);
}
}

stockPortfolio.addStock("NVDA", 737);
stockPortfolio.addStock("VGT", .5);
stockPortfolio.removeStock("APPL", 200);
stockPortfolio.removeStock("NVDA", 100);
stockPortfolio.listHoldings();
stockPortfolio.calculateTotalValue();
