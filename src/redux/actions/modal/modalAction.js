import { ModalTypes } from "../../../common/types";

export const actShowModal = () => ({
  type: ModalTypes.SHOW,
});
export const actHideModal = () => ({
  type: ModalTypes.HIDE,
});
