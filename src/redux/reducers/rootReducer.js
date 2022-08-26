import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import headerReducer from "./headerReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import ratingReducer from "./ratingReducer";

const rootReducer = combineReducers({
  headerReducer,
  userReducer,
  modalReducer,
  productReducer,
  categoryReducer,
  orderReducer,
  cartReducer,
  authReducer,
  ratingReducer,
});

export default rootReducer;
