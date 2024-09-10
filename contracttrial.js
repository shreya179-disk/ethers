const { JsonRpcProvider, ethers } = require("ethers");
const ABI = require("/Users/shreya/ethers/abi.js");
require("dotenv").config();

const provider = new JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
);

const contract = new ethers.Contract(
  process.env.DAI_CONTRACT_ADDRESS,
  ABI,
  provider
);

const main = async () => {
  try {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();

    console.log(`\nReading from ${process.env.DAI_CONTRACT_ADDRESS}\n`);
    console.log(`Name: ${name}`);
    console.log(`Symbol: ${symbol}`);
    console.log(`Total Supply: ${ethers.formatEther(totalSupply)}\n`);

    const balance = await contract.balanceOf(
      "0x6c6Bc977E13Df9b0de53b251522280BB72383700"
    );

    console.log(`Balance Returned: ${balance.toString()}`);
    console.log(`Balance Formatted: ${ethers.formatEther(balance)}\n`);
  } catch (error) {
    console.error("Error interacting with contract:", error);
  }
};

main();
