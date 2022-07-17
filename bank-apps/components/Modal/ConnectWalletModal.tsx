import useUI from "store/UIProvider/useUI";
import { WalletType } from "types/wallet.type";
import useWallet from "store/Wallet/useWallet";
import { walletProviders } from "@config/constants/walletProviders";

const ConnectWalletModal = () => {
  const { closeModal } = useUI();
  const { getChainId, connectMetamask } = useWallet();

  const handleConnectWallet = async (walletType: WalletType) => {
    switch (walletType) {
      case WalletType.METAMASK: {
        handleConnectMetamask();
        break;
      }
    }
  };
  const handleConnectMetamask = async () => {
    try {
      connectMetamask();
      getChainId();
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <p className="text-xl font-semibold">Please select a wallet</p>
      <div className="grid grid-cols-1 gap-4">
        {walletProviders.map((item) => {
          return (
            <button
              className={`flex items-center w-full py-3 px-6 rounded-lg bg-secondary group hover:bg-tertiary`}
              key={item.name}
              onClick={() => handleConnectWallet(item.type)}
            >
              <div className="w-7 h-7 mr-5 rounded-full">
                <img src={item.icon} alt={item.name} />
              </div>
              <span className={`text-base group-hover:text-white`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};
export default ConnectWalletModal;
