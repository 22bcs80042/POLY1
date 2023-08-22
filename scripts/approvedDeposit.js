const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/FlowersNFT.sol/FlowersNFT.json");
require("dotenv").config();

async function main() {
  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/mQEI4efchx5bKM15DZmdDuNgIWaffADN";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);
  const [signer] = await ethers.getSigners();

  const NFT = await ethers.getContractFactory("FlowersNFT");
  const nft = await NFT.attach("0x499c2Fa47ba786d18757116420cF7A88bc280029");

  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await nft
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true, { gasLimit: 3000000 }); // Set a higher gas limit
  await approveTx.wait();
  console.log("Approval confirmed");

  for (let i = 0; i < tokenIds.length; i++) {
    try {
      const depositTx = await fxRoot
        .connect(signer)
        .deposit(nft.address, wallet.address, tokenIds[i], "0x6566", { gasLimit: 3000000 }); // Set a higher gas limit
  
      await depositTx.wait();
      console.log(`Deposited token with ID ${tokenIds[i]}`);
    } catch (error) {
      console.error(`Error depositing token with ID ${tokenIds[i]}:`, error);
    }
  }

  console.log("Approved and deposited");

  const balance = await nft.balanceOf(wallet.address);
  console.log(
    "FlowersNFT wallet balance",
    wallet.address,
    "is: ",
    balance.toString()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });