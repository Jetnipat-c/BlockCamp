import dynamic from "next/dynamic";
import { Drawer, Modal } from "antd";
import { FC, useEffect, Suspense } from "react";

import Navbar from "./Navbar";
import useUI from "store/UIProvider/useUI";
import useWallet from "store/Wallet/useWallet";
import { DrawerViews, ModalViews } from "store/UIProvider/useUI.type";
import ConnectWalletModal from "@components/Modal/ConnectWalletModal";
import SidebarDrawer from "@components/Drawer/SidebarDrawer";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CreateAccountModal from "@components/Modal/CreateAccountModal";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

const MainLayout: FC<PageProps> = ({ children, ...props }) => {
  const { handleAccountsChanged, handleChainChanged, isConnected } =
    useWallet();

  useEffect(() => {
    isConnected();
  }, []);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("chainChanged", handleChainChanged);
    }

    return () => {
      window.ethereum.removeListener("chainChanged", handleChainChanged);
    };
  }, []);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);

  const ModalUI: FC = () => {
    const { displayModal, modalView, closeModal, widthModal } = useUI();
    return (
      <ModalView
        displayModal={displayModal}
        modalView={modalView}
        closeModal={closeModal}
        widthModal={widthModal}
      />
    );
  };

  const ModalView: FC<{
    displayModal: boolean;
    modalView: ModalViews;
    widthModal: number;
    closeModal: () => void;
  }> = ({ displayModal, modalView, closeModal, widthModal }) => {
    return (
      <Modal
        visible={displayModal}
        onCancel={closeModal}
        onOk={closeModal}
        footer={false}
        maskClosable={false}
        style={{ width: widthModal, }}
        bodyStyle={{ background: "rgb(194, 217, 255)", borderRadius: "15px" }}
      >
        {modalView === ModalViews.CONNECT_WALLET && <ConnectWalletModal />}
        {modalView === ModalViews.CREATE_ACCOUNT && <CreateAccountModal />}
      </Modal>
    );
  };

  const DrawerUI: FC = () => {
    const { displayDrawer, drawerView, closeDrawer, widthDrawer, placement } =
      useUI();

    return (
      <DrawerView
        displayDrawer={displayDrawer}
        drawerView={drawerView}
        closeDrawer={closeDrawer}
        widthDrawer={widthDrawer}
        placement={placement}
      />
    );
  };

  const DrawerView: FC<{
    displayDrawer: boolean;
    drawerView: DrawerViews;
    widthDrawer: number;
    placement: "right" | "left" | "top" | "bottom" | undefined;
    closeDrawer: () => void;
  }> = ({ displayDrawer, drawerView, closeDrawer, widthDrawer, placement }) => {
    return (
      <Drawer
        placement={placement}
        onClose={closeDrawer}
        visible={displayDrawer}
        maskClosable={true}
        closeIcon={<IoIosCloseCircleOutline className="text-white text-5xl" />}
      >
        <div className="h-min-screen h-full w-full bg-chakra-colors-brand-deepBlue">
          {drawerView === DrawerViews.SIDEBAR && <SidebarDrawer />}
        </div>
      </Drawer>
    );
  };

  return (
    <div>
      <Suspense fallback={`Loading...`}>
        <Navbar />
      </Suspense>
      <div className="py-6 px-3 max-w-2xl w-full mx-auto my-10">{children}</div>
      <ModalUI />
      <DrawerUI />
    </div>
  );
};

export default MainLayout;
