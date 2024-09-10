const { JsonRpcProvider, ethers } = require("ethers"); // Import both JsonRpcProvider and ethers for utils
require("dotenv").config(); // Load environment variables

// Initialize the provider using the Infura API key
const provider = new JsonRpcProvider(
  `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
);

// Async function to fetch and log the balance
const main = async () => {
  try {
    // Fetch balance of the account from the environment variable
    const balance = await provider.getBalance(process.env.BALANCE_ACCOUNT);
    //no need to use ethers.utils.formatEther
    console.log(
      `\nETH balance of ${process.env.BALANCE_ACCOUNT} --> ${ethers.formatEther(
        balance
      )} ETH\n`
    );
  } catch (error) {
    console.error("Error fetching balance:", error); // Error handling
  }
};

// Call the main function
main();

// Log provider for debugging purposes
console.log(provider);
