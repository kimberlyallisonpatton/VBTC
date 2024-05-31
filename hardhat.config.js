require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    rsktestnet: {
      url: 'https://public-node.testnet.rsk.co',
      chainId: 31,
      accounts: [
        // Replace with your private key for the RSK Testnet
        '0x3BEbD14f76101814554141007e98617f2e9Af5cd'
      ]
    }
  }
};