import { ButtonHTMLAttributes, FC } from "react";

type ModalButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: JSX.Element;
};

const ModalButton: FC<ModalButtonProps> = ({
  children,
  className,
  icon,
  value,
  ...rest
}) => {
  return (
    <button
      className={`flex items-center justify-center space-x-2 bg-chakra-colors-brand-purple rounded-2xl p-2 text-white hover:bg-chakra-colors-brand-blue ${className}`}
      {...rest}
    >
      <div>{icon}</div>
      <div>{children}</div>
    </button>
  );
};

export default ModalButton;
