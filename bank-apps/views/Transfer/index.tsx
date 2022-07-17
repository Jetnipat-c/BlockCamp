import { Box } from "@components/Box";
import MainLayout from "@components/Layout/MainLayout";
import { TokenList } from "@config/constants/tokenList";
import useAccount from "@hooks/useAccount";
import { Alert, message, Spin, Select } from "antd";
import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import { MdOutlineSwitchAccount } from "react-icons/md";
import useWallet from "store/Wallet/useWallet";
import { CommonInput } from "@components/Input";
import { CommonButton } from "@components/Button";
import { getSigner } from "@utils/privider";
import { SCBX__factory } from "typechain-types";
import { environment } from "@config/constants/environment";
import Marquee from "react-fast-marquee";
import { AiOutlineLogin } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";

const { Option } = Select;

const Transfer = () => {
  const { currentAccount } = useWallet();
  const { getAllAccount, dataAccount, loading } = useAccount();

  const [selectFrom, setSelectFrom] = useState<string>("");
  const [selectTo, setSelectTo] = useState<string>("");
  const [selectToken, setSelectToken] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const [batchFrom, setBatchFrom] = useState<string[]>([]);
  const [batchTo, setBatchTo] = useState<string[]>([]);
  const [batchToken, setBatchToken] = useState<string[]>([]);
  const [batchAmount, setBatchAmount] = useState<BigNumber[]>([]);

  const [txLoading, setTxLoading] = useState<boolean>(false);

  console.log(batchAmount);

  useEffect(() => {
    if (currentAccount) {
      getAllAccount();
    }
  }, [currentAccount]);

  const handleChangeTransferFrom = (value: string) => {
    setSelectFrom(value);
  };

  const handleChangeToken = (value: string) => {
    setSelectToken(value);
  };

  const handleClickBatchTransaction = () => {
    setBatchFrom([...batchFrom, selectFrom]);
    setBatchTo([...batchTo, selectTo]);
    setBatchToken([...batchToken, selectToken]);
    setBatchAmount([...batchAmount, ethers.utils.parseEther(String(amount))]);
  };

  const transfer = async () => {
    const signer = await getSigner();
    if (signer) {
      if (selectFrom && selectTo && selectToken && amount > 0) {
        const contract = SCBX__factory.connect(environment.scb, signer);

        try {
          const tx = await contract.transfer(
            selectFrom,
            selectTo,
            selectToken,
            ethers.utils.parseEther(String(amount))
          );
          setTxLoading(true);
          await tx.wait();
          await getAllAccount();
          setTxLoading(false);
        } catch (error) {
          message.error("Not fond account");
        }
      } else {
        message.warning("Invalid value");
      }
    }
  };

  const batchTransfer = async () => {
    const signer = await getSigner();
    if (signer) {
      if (selectFrom && selectTo && selectToken && amount > 0) {
        const contract = SCBX__factory.connect(environment.scb, signer);

        try {
          const tx = await contract.batchTransfer(
            batchFrom,
            batchTo,
            batchToken,
            batchAmount
          );
          setTxLoading(true);
          await tx.wait();
          await getAllAccount();
          setTxLoading(false);
        } catch (error) {
          message.error("Not fond account");
        }
      } else {
        message.warning("Invalid value");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-xl text-white">Transfer</div>
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
                  <div>
                    <Box>
                      <div className="grid grid-cols-1 gap-2 p-2">
                        <div className="text-chakra-colors-white-400">
                          Select Transfer from account.
                        </div>
                        <Select
                          style={{ width: "100%", margin: "auto" }}
                          onChange={handleChangeTransferFrom}
                        >
                          {dataAccount.map((acc, i) => {
                            return (
                              <Option key={i} value={acc.account}>
                                {acc.account}
                              </Option>
                            );
                          })}
                        </Select>
                        <div className="text-chakra-colors-white-400">
                          Select token for transfer.
                        </div>
                        <Select
                          style={{ width: "100%", margin: "auto" }}
                          onChange={handleChangeToken}
                        >
                          {TokenList.map((token, i) => {
                            return (
                              <Option key={i} value={token.address}>
                                {token.name}
                              </Option>
                            );
                          })}
                        </Select>
                        <div className="text-chakra-colors-white-400">
                          Enter Transfer to account.
                        </div>
                        <CommonInput
                          onChange={(e) => setSelectTo(e.target.value)}
                        />
                        <div className="text-chakra-colors-white-400">
                          Enter amount transfer.
                        </div>
                        <CommonInput
                          onChange={(e) => setAmount(+e.target.value)}
                          className="text-white"
                        />
                        <CommonButton onClick={transfer}>Transfer</CommonButton>
                        <CommonButton onClick={handleClickBatchTransaction}>
                          Add Batch
                        </CommonButton>
                        <CommonButton onClick={batchTransfer}>
                          Batch transfer
                        </CommonButton>
                      </div>
                    </Box>
                  </div>

                  <div className="grid grid-cols-1 gap-4 py-4">
                    {dataAccount.map((data, index) => {
                      return (
                        <Box key={index}>
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
                                >
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
                        </Box>
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

Transfer.Layout = MainLayout;

export default Transfer;
