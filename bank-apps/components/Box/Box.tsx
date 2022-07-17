import { FC } from "react";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

const Box: FC<PageProps> = ({ children, ...props }) => {
  return (
    <div className="h-full my-2 w-full rounded-2xl border-2 border-chakra-colors-black-200 odd:bg-chakra-colors-brand-blue even:bg-chakra-colors-brand-purple">
      {children}
    </div>
  );
};

export default Box;
