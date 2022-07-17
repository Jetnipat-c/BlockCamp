import create from "zustand";
import { DrawerViews, IUseUI, ModalViews } from "store/UIProvider/useUI.type";

const initialStore = {
  widthModal: 520,
  widthDrawer: 320,
  displayModal: false,
  displayDrawer: false,
  placement: undefined,
  modalView: ModalViews.CONNECT_WALLET,
  drawerView: DrawerViews.SIDEBAR,
};

const placementList = ["left", "right", "top", "bottom"];

const useUI = create<IUseUI>((set: any, get: any) => ({
  ...initialStore,
  openModal: () => {
    set({ displayModal: true });
  },
  closeModal: () => {
    set({ displayModal: false });
  },
  openDrawer: () => {
    set({ displayDrawer: true });
  },
  closeDrawer: () => {
    set({ displayDrawer: false });
  },
  setModalView: (view: ModalViews) => {
    set({ modalView: view });
  },
  setDrawerView: (view: DrawerViews) => {
    const placement = view.split(" ").find((f) => {
      return placementList.find((position) => position === f);
    });
    set({ drawerView: view, placement });
  },
}));

export default useUI;
