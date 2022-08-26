import { CartType } from "../../common/types";

const initialValue = {
  listCart: JSON.parse(localStorage.getItem(CartType.CART_LOCALSTORAGE)) || [],
  isLoading: false,
};

const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CartType.ADD_TO_CART: {
      const products = [action.payload, ...state.listCart];

      localStorage.setItem(
        CartType.CART_LOCALSTORAGE,
        JSON.stringify(products)
      );
      return {
        ...state,
        listCart: products,
        isLoading: false,
      };
    }
    case CartType.REMOVE_TO_CART: {
      const id = action.payload;
      const products = [...state.listCart].filter(
        (cartItem) => cartItem.id !== id
      );
      localStorage.setItem(
        CartType.CART_LOCALSTORAGE,
        JSON.stringify(products)
      );
      return {
        ...state,
        listCart: products,
      };
    }
    case CartType.SET_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CartType.CHANGE_QUANTITY_CART: {
      const id = action.payload.id;
      const quantity = action.payload.quantity;
      const listCartClone = [...state.listCart];

      const index = listCartClone.findIndex((cartItem) => cartItem.id === id);

      listCartClone[index].quantity = quantity;

      localStorage.setItem(
        CartType.CART_LOCALSTORAGE,
        JSON.stringify(listCartClone)
      );

      return {
        ...state,
        listCart: listCartClone,
      };
    }
    case CartType.CHANGE_WISH_LIST: {
      const id = action.payload.id;
      const wishList = action.payload.wishList;
      const listCartClone = [...state.listCart];

      const index = listCartClone.findIndex(
        (cartItem) => +cartItem?.id === +id
      );

      if (listCartClone[index]) {
        listCartClone[index].wishList = wishList;
        localStorage.setItem(
          CartType.CART_LOCALSTORAGE,
          JSON.stringify(listCartClone)
        );
      }
      return {
        ...state,
        listCart: listCartClone,
      };
    }
    case CartType.REMOVE_ALL_CART: {
      localStorage.removeItem(CartType.CART_LOCALSTORAGE);
      return {
        ...state,
        listCart: [],
        isLoading: false,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
