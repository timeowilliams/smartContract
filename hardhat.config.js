const { env } = require("process");

require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
    }, 
    ropsten: {
      url: "https://ropsten.infura.io/v3/{ID}",
      accounts: [`0x${env.PRIVATE_KEY}`]
    }
  }
};
