import { FC } from "react";

interface PageProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const DecimalInput: FC<PageProps> = ({ className, ...rest }) => {
  return (
    <input
      {...rest}
      // defaultValue="0.00"
      // min="0"
      className={`${
        className ? className : "bg-btn-gray1 w-full text-right text-t-blue4 px-4 h-12 rounded-2xl focus:outline-none"
      }`}
    />
  );
};

export default DecimalInput;
