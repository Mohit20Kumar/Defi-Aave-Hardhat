require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "ADD A VALUE"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "ADD A VALUE"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    etherscan: {
        apiKey: {
            sepolia: ETHERSCAN_API_KEY,
        },
    },
    // gasReporter: {
    //     enabled: false,
    //     currency: "USD",
    //     outputFile: "gas-report.txt",
    //     noColors: true,
    //     // coinmarketcap = process.env.COINMARKETCAP_API_KEY,
    // },
    solidity: {
        compilers: [
            { version: "0.8.7" },
            { version: "0.6.6" },
            { version: "0.4.19" },
            { version: "0.6.12" },
        ],
    },
    // namedAccounts: {
    //     deployer: {
    //         default: 0,
    //     },
    //     player: {
    //         default: 1,
    //     },
    // },
    defaultNetwork: "hardhat",
    networks: {
        // localhost: {
        //     chainId: 31337,
        //     blockConfirmations: 1,
        // },
        // hardhat: {
        //     chainId: 31337,
        //     blockConfirmations: 1,
        // },

        hardhat: {
            chainId: 31337,
            forking: {
                url: MAINNET_RPC_URL,
            },
        },

        // goerli: {
        //     url: GOERLI_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 5,
        //     blockConfirmations: 6,
        //     gasPrice: 30000000000,
        // },
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations: 6,
            gasPrice: 30000000000,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    mocha: {
        timeout: 300000,
    },
}
