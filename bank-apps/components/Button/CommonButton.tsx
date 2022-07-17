import { ButtonHTMLAttributes, FC } from "react";

type CommonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: JSX.Element;
};

const CommonButton: FC<CommonButtonProps> = ({
  children,
  className,
  icon,
  value,
  ...rest
}) => {
  return (
    <button
      className={`flex items-center justify-center space-x-2 bg-chakra-colors-brand-lightBlue rounded-2xl p-2 text-white hover:bg-chakra-colors-black-200 ${className}`}
      {...rest}
    >
      <div>{icon}</div>
      <div>{children}</div>
    </button>
  );
};

export default CommonButton;
