import { Navigate } from "@config/constants/navigate";
import { truncateAddress } from "@utils/common";
import { Button, Dropdown, Menu } from "antd";
import Link from "next/link";
import { useState } from "react";
import useUI from "store/UIProvider/useUI";
import { DrawerViews, ModalViews } from "store/UIProvider/useUI.type";
import useWallet from "store/Wallet/useWallet";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiWalletAlt } from "react-icons/bi";
import { CommonButton } from "@components/Button";

const Navbar = () => {
  const { openModal, openDrawer, setModalView, setDrawerView } = useUI();
  const { currentAccount, chain } = useWallet();

  const handleOpenModal = (type: ModalViews) => {
    setModalView(type);
    openModal();
  };

  const handleOpenDrawer = (type: DrawerViews) => {
    setDrawerView(type);
    openDrawer();
  };

  return (
    <div className="flex items-center space-x-4 h-[60px] border-b-[1px] border-chakra-colors-white-200 px-6">
      <div>
        <GiHamburgerMenu
          onClick={() => handleOpenDrawer(DrawerViews.SIDEBAR)}
          className="text-xl text-white hover:text-chakra-colors-brand-blue"
        />
      </div>
      <div className="text-white font-semibold text-xl flex-1">SCB10X</div>
      <div>
        {currentAccount ? (
          <>
            <CommonButton icon={<BiWalletAlt />}>
              ${truncateAddress(currentAccount)}
            </CommonButton>
          </>
        ) : (
          <>
            <CommonButton
              onClick={() => handleOpenModal(ModalViews.CONNECT_WALLET)}
              icon={<BiWalletAlt />}
            >
              Connect Wallet
            </CommonButton>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
