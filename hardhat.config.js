


require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/v1/7cefdda0dcc63a4f61b6060edb8527c11eb4a896",
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/mQEI4efchx5bKM15DZmdDuNgIWaffADN",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

