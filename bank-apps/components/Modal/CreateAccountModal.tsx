import { ModalButton } from "@components/Button";
import { CommonInput } from "@components/Input";
import { environment } from "@config/constants/environment";
import useAccount from "@hooks/useAccount";
import { getSigner } from "@utils/privider";
import { message, Spin } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import useUI from "store/UIProvider/useUI";
import { SCB__factory } from "typechain-types";

const CreateAccountModal = () => {
  const router = useRouter();
  const { closeModal } = useUI();
  const { getAllAccount } = useAccount();
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const handleCreateAccount = async () => {
    const signer = await getSigner();
    if (signer) {
      if (name.length !== 0) {
        setLoading(true);
        try {
          const contract = SCB__factory.connect(environment.scb, signer);
          const tx = await contract.createAccount(name);

          await tx.wait();

          closeModal();
          router.reload();
        } catch (error) {
          message.warning("Already account");
        }
        setLoading(false);
      } else {
        message.warning("Please enter account name.");
      }
    }
  };
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-xl font-medium text-chakra-colors-brand-deepBlue">
        Account Name
      </div>
      <CommonInput onChange={(e) => setName(e.target.value)} />
      <ModalButton onClick={handleCreateAccount}>
        {loading ? <Spin /> : "Create"}
      </ModalButton>
    </div>
  );
};

export default CreateAccountModal;
