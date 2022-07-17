import { ethers } from "ethers";

export const getProvider = async () => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    await provider.send("eth_requestAccounts", []);
    return provider;
  }
  return null;
};

export const getSigner = async () => {
  const provider = await getProvider();
  return provider ? provider.getSigner() : null;
};
