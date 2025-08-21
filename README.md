# Stock Portfolio Tracker  

## Introduction  
This project is my **first attempt at learning JavaScript**, and I’m using it as both a personal learning exercise and a way to showcase what I’m picking up along the way.  

The script is a simple but expandable stock portfolio tracker. It allows you to add or remove stocks, keep track of how many shares you own, and calculate your portfolio’s **real-time market value** using the [Alpha Vantage API](https://www.alphavantage.co/).  

I see this project as the foundation of my JavaScript journey — something that starts basic but can grow into a more polished application as I continue to improve my skills.  

---

## Features  

- **Add & Remove Stocks**  
  - Add stocks with a symbol and number of shares.  
  - Remove shares from existing holdings.  

- **Portfolio Tracking**  
  - Maintains a running list of your current positions.  
  - Outputs clean, human-readable results.  

- **Live Price Fetching**  
  - Uses Alpha Vantage’s `GLOBAL_QUOTE` endpoint to fetch the latest stock prices.  
  - Automatically calculates the **value per holding** and the **total portfolio value**.  

- **Formatted Output**  
  - Numbers are formatted with commas and two decimal places for readability.  
  - Clear breakdown of portfolio value with sectioned output.  

---

## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/jp1014506/stockPortfolio.git
   cd stockPortfolio
Install dependencies:
npm install
Set up your Alpha Vantage API key:
Sign up at Alpha Vantage.
Create a .env file in the project root and add your key:
ALPHA_VANTAGE_API_KEY=your_api_key_here
Usage
Run the script using Node.js:
node "Stock Portfolio.js"
Sample output:
100 shares of GOOG added to your portfolio.
350 shares of SPY added to your portfolio.
APPL not found in portfolio.
You have 20 of GOOG left in your portfolio.
[ { symbol: 'GOOG', shares: 20 }, { symbol: 'SPY', shares: 350 } ]

📊 Portfolio Breakdown:
--------------------------
GOOG: 20 shares @ $164.42 = $3,288.40
SPY: 350 shares @ $254.11 = $88,938.5
--------------------------
💰 Total Portfolio Value: $92,226.90

## Project Structure
stockPortfolio/
├── Stock Portfolio.js   
├── package.json       
├── .env               
└── README.md            

## Future Improvements
✅ Improve formatting (commas, rounding).
🔲 Add persistent storage (JSON or database) so portfolio saves across runs.
🔲 Build a simple web interface for real-time viewing.
🔲 Add support for fractional shares & ETFs.
🔲 Explore charting libraries to visualize portfolio growth.

## Why This Project Matters to Me
This portfolio tracker isn’t just about stocks — it’s about learning JavaScript fundamentals:
Working with arrays, loops, and objects.
Handling API calls with fetch.
Formatting and structuring real-world data.
I’m using this as a showcase to track my progress, and over time I hope it becomes something I can point to as proof of what I’ve learned.
