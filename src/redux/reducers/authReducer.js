import { AuthTypes } from "../../common/types";

const initialState = {
  profile: JSON.parse(localStorage.getItem(AuthTypes.AUTH_LOCALSTORAGE)) || {},
  isLoggIn: false,
  isLoading: false,
  notif: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN: {
      return {
        ...state,
        isLoading: false,
        notif: "",
      };
    }
    case AuthTypes.LOGIN_SUCCESS: {
      console.log("login");
      const data = action.payload;
      localStorage.setItem(AuthTypes.AUTH_LOCALSTORAGE, JSON.stringify(data));
      return {
        ...state,
        isLoading: false,
        isLoggIn: true,
        profile: data,
      };
    }
    case AuthTypes.CHANGE_PROFILE: {
      const data = action.payload;
      localStorage.setItem(AuthTypes.AUTH_LOCALSTORAGE, JSON.stringify(data));
      return {
        ...state,
        isLoading: false,
        profile: data,
      };
    }
    case AuthTypes.SET_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthTypes.LOGIN_FAIL: {
      return {
        ...state,
        isLoggIn: false,
        isLoading: false,
        notif: "login failed",
      };
    }
    case AuthTypes.LOGOUT: {
      localStorage.removeItem(AuthTypes.AUTH_LOCALSTORAGE);
      return {
        ...state,
        isLoggIn: false,
        profile: {},
      };
    }

    default:
      return state;
  }
};

export default authReducer;
