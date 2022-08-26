import { ModalTypes } from "../../common/types";

const initalState = {
  isShow: false,
};

const modalReducer = (state = initalState, action) => {
  switch (action.type) {
    case ModalTypes.SHOW: {
      return {
        ...state,
        isShow: true,
      };
    }
    case ModalTypes.HIDE: {
      return {
        ...state,
        isShow: false,
      };
    }

    default:
      return state;
  }
};

export default modalReducer;
