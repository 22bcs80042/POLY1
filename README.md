# polyproof
#  create a Auction app frontend and deploy it on the Localhost network
This repository is made for my polyproof 1 project which is used create NFTs using ERC712A token and deploy ,mint and mapped this on goerili network and transfer this on different ethereum to polygon network using fxportal bridge. 

## Problem Statement
To successfully complete the Final Challenge, your project should:
1.Generate a 5-item collection using DALLE 2 or Midjourney
2.Store items on IPFS using pinata.cloud
3.Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
4.You should have a promptDescription function on the contract that returns the prompt you used to generate the images
5.Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
6.Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
7.Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
8.Approve the NFTs to be transferred
9.Deposit the NFTs to the Bridge
10.Test balanceOf on Mumbai
## Description
This program  written in Solidity by using a simple contract, solidity is  a programming language used for developing smart contracts on the Ethereum blockchain.
The provided Solidity smart contract creates a custom NFT (Non-Fungible Token) contract called FlowersNFT. This contract extends the functionality of the ERC721 standard by inheriting from the ERC721A contract. Let's break down the key components and functionalities of this contract:
Importing Dependencies:
The contract starts by importing the ERC721A contract, which is expected to provide the implementation for the ERC721 standard. This contract is assumed to be located in the "erc721a/contracts" directory.
Contract Definition:
The FlowersNFT contract is defined as a child contract of ERC721A. This means it inherits all the properties and methods of the ERC721 standard.
State Variables:
1.address public owner+ This variable holds the address of the contract owner.
2.string private baseUrl = The IPFS base URL where NFT metadata is stored. The metadata includes details about each NFT.
3.string public prompt =  A description displayed to users to prompt their interaction with the NFTs.
4.uint256 public maxQuantity = The maximum number of NFTs that can be minted.
Constructor:
The constructor initializes the contract by setting the contract name and symbol using the constructor of ERC721A. It also sets the owner variable to the address that deployed the contract.
Owner Modifier:
A custom modifier called onlyOwner is defined. It restricts the execution of certain functions to be only accessible by the contract owner.
Minting Function:
The mint function is designed to allow the contract owner to mint new NFTs. It takes the recipient's address and a token ID as parameters. The function checks if the maximum token quantity hasn't been exceeded before minting. If not, it calls the _mint function from the parent contract to create a new NFT for the specified recipient.
Base URI Override:
The _baseURI function is overridden to provide the base URL for the NFT metadata. When users query for NFT metadata, this base URL is combined with the token ID to construct the complete URL.
Prompt Description Function:
The getPromptDescription function allows external callers to retrieve the prompt description set in the contract.
Overall, this contract enhances the ERC721 standard by providing features like minting NFTs with a limit, defining a base URL for metadata, and offering a prompt description. 

## Getting Started

### Executing Program
To run this CONTRACT we use VS CODE IDE. 
Deploy and Mint
Deploy the FlowersNFT contract on the Goerli testnet: npx hardhat run scripts/deploy.js --network goerli 
Mint NFTs to your address: npx hardhat run scripts/mint.js --network goerli
Deposit NFTs to Polygon
Deposit the NFTs to the FxPortal Bridge: npx hardhat run scripts/approvedDeposit.js --network goerli
Map Token on FxPortal Mapper (Manual)
Manually map the token to the FxPortal Mapper contract on Ethereum.
Note down the child address provided by the mapping process.
Verify NFTs on Polygon
Verify the NFTs have been deposited on the Polygon network: npx hardhat run scripts/getBalance.js --network mumbai
## Author

Sulochana

## License

This project is licensed under the MIT License - see the LICENSE file for details
