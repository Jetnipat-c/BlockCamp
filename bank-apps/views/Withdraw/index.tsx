import { Box } from "@components/Box";
import MainLayout from "@components/Layout/MainLayout";
import { TokenList } from "@config/constants/tokenList";
import useAccount from "@hooks/useAccount";
import { Alert, message, Spin } from "antd";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import useWallet from "store/Wallet/useWallet";
import { CommonInput } from "@components/Input";
import { TDetailAccount } from "types/detailAccount.type";
import { CommonButton } from "@components/Button";
import { getSigner } from "@utils/privider";
import { SCBX__factory, Token__factory } from "typechain-types";
import { environment } from "@config/constants/environment";
import Marquee from "react-fast-marquee";
import { AiOutlineLogin } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";

const Deposit = () => {
  const { currentAccount } = useWallet();
  const { getAllAccount, dataAccount, loading } = useAccount();

  const [selectAccount, setSelectAccount] = useState<string>("");
  const [selectToken, setSelectToken] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const [txLoading, setTxLoading] = useState<boolean>(false);

  useEffect(() => {
    if (currentAccount) {
      getAllAccount();
    }
  }, [currentAccount]);

  const handleSelect = (data: TDetailAccount, indexToken: number) => {
    setSelectAccount(data.account);
    setSelectToken(String(data.balance[indexToken].token));
  };

  const withdraw = async () => {
    const signer = await getSigner();
    if (signer) {
      if (selectAccount && selectToken && amount > 0) {
        const contract = SCBX__factory.connect(environment.scb, signer);
        const token = Token__factory.connect(selectToken, signer);
        const tx = await token.approve(
          contract.address,
          ethers.constants.MaxUint256
        );
        if (tx) {
          const tx = await contract.withdraw(
            selectAccount,
            selectToken,
            ethers.utils.parseEther(String(amount))
          );
          setTxLoading(true);
          await tx.wait();
          await getAllAccount();

          setTxLoading(false);
        }
      } else {
        message.warning("Invalid value");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-xl text-white">WithDraw</div>
      </div>
      {!currentAccount ? (
        <div className="flex flex-col items-center justify-center space-y-4 border-2 border-chakra-colors-white-200 rounded-md my-4 py-10">
          <AiOutlineLogin className="text-5xl text-chakra-colors-white-200" />
          <div className="text-xl text-chakra-colors-white-200 font-semibold">
            Please connect metamask
          </div>
        </div>
      ) : (
        <>
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <Spin />
            </div>
          ) : (
            <div>
              {txLoading && (
                <Alert
                  banner
                  message={
                    <Marquee pauseOnHover gradient={false}>
                      Please wait transaction is processing.
                    </Marquee>
                  }
                />
              )}

              {dataAccount.length ? (
                <>
                  <div className="grid grid-cols-1 gap-4 py-4">
                    {dataAccount.map((data, index) => {
                      return (
                        <div key={index}>
                          <Box>
                            <div className="flex flex-col items-center p-4">
                              <div className="text-white text-2xl">
                                <div className="flex items-center space-x-2">
                                  <span>{data.account}</span>
                                  <span>
                                    <BiCopy
                                      onClick={() =>
                                        navigator.clipboard.writeText(
                                          data.account
                                        )
                                      }
                                      className="w-6 hover:text-chakra-colors-brand-purple"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="text-chakra-colors-white-200 text-xs">
                                Account Name
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mx-2">
                              {data.balance.map((b, i) => {
                                return (
                                  <div
                                    key={i}
                                    className="flex flex-col space-y-1 items-center justify-between bg-chakra-colors-white-100 rounded-xl p-2"
                                    onClick={() => handleSelect(data, i)}
                                  >
                                    <div className="relative w-full">
                                      {b.token === selectToken &&
                                        data.account === selectAccount && (
                                          <AiOutlineCheckCircle
                                            className={`absolute text-right right-0 text-2xl text-white my-1 `}
                                          />
                                        )}
                                    </div>
                                    <div>
                                      <img
                                        src={TokenList[i].icon}
                                        className="w-10"
                                      />
                                    </div>

                                    <div className="font-medium text-lg text-white truncate w-full text-center">
                                      {ethers.utils.formatUnits(b.amount)}
                                    </div>
                                    <div className="text-white text-xs">
                                      {TokenList[i].symbol}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="mt-4 grid grid-cols-1 gap-2 px-2">
                              <CommonInput
                                className="text-black w-full bg-chakra-colors-white-400"
                                onChange={(e) => setAmount(+e.target.value)}
                              />
                              <CommonButton
                                onClick={withdraw}
                                className="w-full"
                              >
                                Withdraw
                              </CommonButton>
                            </div>
                          </Box>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center space-y-4 border-2 border-chakra-colors-white-200 rounded-md my-4 py-10">
                    <MdOutlineSwitchAccount className="text-5xl text-chakra-colors-white-200" />
                    <div className="text-xl text-chakra-colors-white-200 font-semibold">
                      Not found Account
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

Deposit.Layout = MainLayout;

export default Deposit;
