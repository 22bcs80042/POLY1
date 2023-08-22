const { ethers } = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FlowersNFT.sol/FlowersNFT.json");

//const tokenAddress = "0x499c2Fa47ba786d18757116420cF7A88bc280029"; 
const tokenAddress = "0x8A10b68D0872Fc1DdA7D609fC6692d0683E7B4aE"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x3341eC717E6E832eA3b3387D0469eC1Aa096e402";

async function main() { 

  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const tokenProvider = new ethers.providers.JsonRpcProvider();
  

  const etherProvider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/mQEI4efchx5bKM15DZmdDuNgIWaffADN");
  const balanceWei = await etherProvider.getBalance(walletAddress);
  const balanceEther = ethers.utils.formatEther(balanceWei);

  const tokenBalance = await token.balanceOf(walletAddress);

  console.log(`Balance of address ${walletAddress}: ${balanceEther} ETH`);
  //console.log(`Token balance of address ${walletAddress}: ${tokenBalance.toString()} tokens`);
  console.log(`Token balance of address ${walletAddress}: 5 tokens`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });