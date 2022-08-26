import { HeaderType } from "../../common/types";

const initalState = {
  height: 0,
};

const headerReducer = (state = initalState, action) => {
  switch (action.type) {
    case HeaderType.GET_HEIGHT: {
      return {
        ...state,
        height: action.payload,
      };
    }

    default:
      return state;
  }
};

export default headerReducer;
