export enum ModalViews {
  CONNECT_WALLET = "connect wallet",
  CONNECT_NETWORK = "connect network",
  CREATE_ACCOUNT = "create account",
  TRANSFER = "transfer",
}

export enum DrawerViews {
  SIDEBAR = "sidebar left",
}

export interface IUseUI {
  widthModal: number;
  widthDrawer: number;
  displayModal: boolean;
  displayDrawer: boolean;
  placement: "right" | "left" | "top" | "bottom" | undefined;
  modalView: ModalViews;
  drawerView: DrawerViews;
  openModal: () => void;
  closeModal: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  setModalView: (view: ModalViews) => void;
  setDrawerView: (view: DrawerViews) => void;
}
