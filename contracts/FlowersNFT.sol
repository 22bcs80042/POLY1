// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import the ERC721A contract, which provides the implementation for ERC721 standard
import "erc721a/contracts/ERC721A.sol";

// Custom NFT contract that extends ERC721A
contract FlowersNFT is ERC721A {
    address public owner;

    // Base URL for the NFTs (IPFS base URL)
    string private baseUrl = "https://gateway.pinata.cloud/ipfs/QmQzftEvqfLDKzTXJobsUcrHXfgoPSJUTPkGvPRB5xbzsz/";

    // Prompt description displayed to users
    string public prompt = "Discover the beauty of unique flowers";

    // Maximum number of tokens that can be minted
    uint256 public maxQuantity = 100;

    // Constructor to initialize the contract with a name and symbol for the NFTs
    constructor() ERC721A("FlowersNFT", "FNFT") {
        owner = msg.sender;
    }

    // Modifier that only allows the owner to execute a function
    modifier onlyOwner() {
        require(msg.sender == owner, "Can be performed only by the owner.");
        _;
    }

    // Function to mint NFTs, which can only be called by the owner
    function mint(address to, uint256 tokenId) external onlyOwner {
        require(totalSupply() + 1 <= maxQuantity, "Maximum number of tokens reached");
        _mint(to, tokenId);
    }

    // Override the baseURI function to return the base URL for the NFTs
    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    // Function to get the prompt description
    function getPromptDescription() external view returns (string memory) {
        return prompt;
    }
}
