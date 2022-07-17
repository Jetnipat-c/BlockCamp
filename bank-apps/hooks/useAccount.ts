import { environment } from "@config/constants/environment";
import { TokenList } from "@config/constants/tokenList";
import { getSigner } from "@utils/privider";
import { ethers } from "ethers";
import { useState } from "react";
import useWallet from "store/Wallet/useWallet";
import { SCBX__factory } from "typechain-types";
import { TDetailAccount } from "types/detailAccount.type";

const useAccount = () => {
  const { currentAccount } = useWallet();
  const [dataAccount, setDataAccount] = useState<TDetailAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getBalanceOfToken = async (accounts: string[]) => {
    const signer = await getSigner();
    if (signer) {
      setLoading(true);
      const contract = SCBX__factory.connect(environment.scb, signer);
      let data: TDetailAccount[] = [];
      for (let i = 0; i < accounts.length; i++) {
        const busd = await contract.getBalance(
          accounts[i],
          TokenList[0].address
        );
        const usdt = await contract.getBalance(
          accounts[i],
          TokenList[1].address
        );
        data.push({
          account: accounts[i],
          balance: [
            {
              token: TokenList[0].address,
              amount: busd,
            },
            {
              token: TokenList[1].address,
              amount: usdt,
            },
          ],
        });
      }
      setDataAccount(data);
      setLoading(false);
    }
  };
  const getAllAccount = async () => {
    if (typeof window.ethereum !== "undefined" && currentAccount) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );
      const signer = provider.getSigner();
      await provider.send("eth_requestAccounts", []);

      const contract = SCBX__factory.connect(environment.scb, signer);
      const accounts = await contract.getAllAccount(currentAccount);
      await getBalanceOfToken(accounts);
    }
  };
  return { getAllAccount, getBalanceOfToken, dataAccount, loading, setLoading };
};
export default useAccount;
