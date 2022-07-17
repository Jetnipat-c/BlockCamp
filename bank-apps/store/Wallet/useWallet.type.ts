import { AddEthereumChainParameter } from "types/addEthereumChainParameter";
import { WalletType } from "types/wallet.type";

export interface IUseWallet {
  currentAccount: string;
  walletType: WalletType | null | undefined;
  chain: AddEthereumChainParameter | null | undefined;
  connectMetamask: () => void;
  getChainId: () => void;
  handleAccountsChanged: (accounts: any) => void;
  handleChainChanged: (_chainId: any) => void;
  handleSwitchChain: (index: number) => void;
  isConnected: () => void;
  disconnect: () => void;
}
