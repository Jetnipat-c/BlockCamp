import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const getAccounts = () => {
  const arr = Object.entries(process.env);
  const privateKeys = arr.filter(([key, val]) => key.includes(`PRIVATE_KEY`)).map(([key, val]) => val || "");
  return privateKeys;
};

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: getAccounts(),
    },
    goerli: {
      url: "https://goerli.optimism.io/",
      accounts: getAccounts(),
    },
    rinkeby: {
      url: "https://rpc.ankr.com/eth_rinkeby",
      accounts: getAccounts(),
    },
  },
};

export default config;
