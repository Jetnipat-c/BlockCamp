import { FC } from "react";

interface PageProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CommonInput: FC<PageProps> = ({ className, ...rest }) => {
  return (
    <input
      {...rest}
      // defaultValue="0.00"
      // min="0"
      className={`border-[1px] border-chakra-colors-white-100 bg-chakra-colors-brand-lightBlue h-10 text-white text-center rounded-xl shadow-sm focus:outline-none ${className}`}
    />
  );
};

export default CommonInput;
