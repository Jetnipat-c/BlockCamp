import { Navigate } from "@config/constants/navigate";
import Link from "next/link";
import { useRouter } from "next/router";
import useUI from "store/UIProvider/useUI";

const SidebarDrawer = () => {
  const router = useRouter();
  const { closeDrawer } = useUI();

  const handleClose = () => {
    setTimeout(() => {
      closeDrawer();
    }, 300);
  };
  return (
    <div className="grid grid-cols-1 gap-3">
      {Navigate.map((menu, index) => {
        return (
          <Link key={index} href={menu.path}>
            <div
              onClick={handleClose}
              className={`p-3 ${
                router.pathname === menu.path
                  ? "bg-chakra-colors-brand-purple"
                  : "bg-chakra-colors-brand-deepBlue"
              }  rounded-2xl text-white text-lg hover:bg-chakra-colors-brand-purple`}
            >
              {menu.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default SidebarDrawer;
