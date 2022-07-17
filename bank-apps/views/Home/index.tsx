import { Box } from "@components/Box";
import MainLayout from "@components/Layout/MainLayout";
import { TokenList } from "@config/constants/tokenList";
import useAccount from "@hooks/useAccount";
import { Spin } from "antd";
import { ethers } from "ethers";
import { useEffect } from "react";
import { HiUserAdd } from "react-icons/hi";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import useUI from "store/UIProvider/useUI";
import { ModalViews } from "store/UIProvider/useUI.type";
import useWallet from "store/Wallet/useWallet";

const Home = () => {
  const { currentAccount } = useWallet();
  const { openModal, setModalView } = useUI();
  const { getAllAccount, dataAccount, loading } = useAccount();

  useEffect(() => {
    if (currentAccount) {
      getAllAccount();
    }
  }, [currentAccount]);

  const handleOpenModal = (type: ModalViews) => {
    setModalView(type);
    openModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-xl text-white">My Account</div>
        <HiUserAdd
          onClick={() => handleOpenModal(ModalViews.CREATE_ACCOUNT)}
          className="text-xl text-white hover:text-chakra-colors-brand-purple"
        />
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
              {dataAccount.length ? (
                <>
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

Home.Layout = MainLayout;

export default Home;
