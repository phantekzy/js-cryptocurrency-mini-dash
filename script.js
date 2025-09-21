// Get HTML elements for cryptocurrency prices
let bitcoin = document.getElementById('bit');
let eth = document.getElementById('eth');
let dogecoin = document.getElementById('doge');

/**
 * Fetches live cryptocurrency prices from CoinGecko API
 * Updates the DOM elements with latest prices
 */
async function getPrices() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"
    );

    // Parse the JSON response
    const data = await res.json();
    console.log(data); // For debugging

    // Update DOM with formatted prices
    bitcoin.textContent = `$${data.bitcoin.usd.toLocaleString()}`;
    eth.textContent = `$${data.ethereum.usd.toFixed(2)}`;
    dogecoin.textContent = `$${data.dogecoin.usd.toFixed(4)}`;

  } catch (err) {
    console.error('Error fetching prices:', err);
  }
}

// Initial price fetch
getPrices();

// Refresh prices every 15 seconds
setInterval(getPrices, 15000);

