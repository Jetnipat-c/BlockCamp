import { ethers } from "ethers";

export type TDetailAccount = {
  account: string;
  balance: Balance[];
};

export type Balance = {
  token: string;
  amount: ethers.BigNumber;
};
