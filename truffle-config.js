
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();


const privateKey = process.env.RINKEBY_PKEY;
const mainnetPK = process.env.MAINNET_PKEY;
module.exports = {
 
  networks: {
    advanced: {
      host: "127.0.0.1", 
      port: 8545,             // Custom port
      network_id: "*",       // Custom network
      gas: 6721975,           // Gas sent with each transaction (default: ~6700000)
      gasPrice: 6721975,  // 20 gwei (in wei) (default: 100 gwei)
      websocket: true        // Enable EventEmitter interface for web3 (default: false)
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, `wss://rinkeby.infura.io/ws/v3/${process.env.INFURA_KEY}`),
      network_id: 4,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 9500000,
      gasPrice: 20000000000,
    },
    mainnet: {
      provider: () => new HDWalletProvider(mainnetPK, `wss://mainnet.infura.io/ws/v3/${process.env.INFURA_KEY}`),
      network_id: 1,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 9900000,
      gasPrice: 90000000000,
    },
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      //  evmVersion: "byzantium"
      }
    }
  },

  db: {
    enabled: false
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.API_KEY,
  }
};
