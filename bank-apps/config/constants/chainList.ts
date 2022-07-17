import { environment } from "./environment";
import { AddEthereumChainParameter } from "types/addEthereumChainParameter";

export const chainList: Record<string, AddEthereumChainParameter> = {
  RIN_TESTNET: {
    chainId: "0x4",
    chainName: "Rinkeby",
    nativeCurrency: {
      name: "Rinkeby Ether",
      symbol: "RIN",
      decimals: 18,
    },
    rpcUrls: [
      "https://rinkeby.infura.io/v3/${INFURA_API_KEY}",
      "wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}",
    ],
    blockExplorerUrls: ["https://rinkeby.etherscan.io"],
    iconUrls: ["/assets/logo/ethereum.svg"],
  },
};

export const wrongNetwork = {
  chain: {
    chainId: "",
    chainName: "Wrong network",
    nativeCurrency: {
      name: "",
      symbol: "",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: [""],
    iconUrls: ["/assets/icon/warning-icon.png"],
  },
};

const chainProviderTestNet = [
  { chain: chainList.RIN_TESTNET, icon: "/assets/logoChain/BitkubChain.png" },
];
const chainProviderMainNet = [
  { chain: chainList.RIN_TESTNET, icon: "/assets/logoChain/BitkubChain.png" },
];

const selectNetwork = () => {
  switch (environment.network) {
    case "testnet": {
      return chainProviderTestNet;
    }
    case "mainnet": {
      return chainProviderMainNet;
    }
    default:
      return chainProviderMainNet;
  }
};

export const chainProvider = selectNetwork();
