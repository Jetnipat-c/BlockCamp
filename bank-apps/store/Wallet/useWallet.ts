import create from "zustand";
import { IUseWallet } from "./useWallet.type";
import { chainProvider, wrongNetwork } from "@config/constants/chainList";
import { WalletType } from "types/wallet.type";

const initialStore = {
  currentAccount: "",
  chain: undefined,
  walletType: undefined,
};

const useWallet = create<IUseWallet>((set: any, get: any) => ({
  ...initialStore,
  connectMetamask: async () => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          get().handleAccountsChanged(accounts);
          set({ walletType: WalletType.METAMASK });
        })
        .catch((err) => {
          if (err.code === 4001) {
            console.log("Please connect to MetaMask.");
          } else {
            console.error(err);
          }
        });
    }
  },

  getChainId: async () => {
    if (typeof window.ethereum !== "undefined") {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      const currentNetwork = chainProvider.find(
        (f) => f.chain?.chainId === chainId
      );
      if (!currentNetwork) {
        set({
          chain: wrongNetwork.chain,
          errorMessage: "Fin Deal is not supported on this network.",
        });
      } else {
        set({ chain: currentNetwork.chain, errorMessage: "" });
      }
    }
  },
  isConnected: async () => {
    if (typeof window.ethereum !== "undefined") {
      const ethAccounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const [currentAccount] = ethAccounts as string[];
      if (currentAccount) {
        set({ walletType: WalletType.METAMASK });
        set({ currentAccount });
        get().getChainId();
      }
    }
  },
  disconnect: async () => {
    if (typeof window.ethereum !== "undefined") {
      set({ currentAccount: "", chain: undefined });
    }
  },
  handleAccountsChanged: async (accounts) => {
    console.log("handleAccountsChanged");

    if (accounts.length === 0) {
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== get().currentAccount) {
      set({ currentAccount: accounts[0] });
    }
  },
  handleChainChanged: async (_chainId) => {
    console.log("handleChainChanged");
    if (typeof window.ethereum !== "undefined") {
      window.location.reload();
    }
  },
  handleSwitchChain: async (index: number) => {
    console.log("handleSwitchChain");
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{ ...chainProvider[index].chain }],
      });
    }
  },
}));

export default useWallet;
