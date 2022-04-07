import { useReducer } from "react";

export const useUserDataReducer = () => {
  const userInitial = {
    user: {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      createdAt: "",
      updatedAt: "",
      cart: [],
      wishlist: [],
      id: "",
    },
    encodedToken: "",
  };

  const [userData, userDataDispatch] = useReducer(userSet, userInitial);

  function userSet(state, { type, payload }) {
    switch (type) {
      case "LOGIN":
        return payload;

      case "LOGOUT":
        return userInitial;

      case "ADDWISHLIST": {
        return {
          ...state,
          user: { ...state.user, wishlist: [...state.user.wishlist, payload] },
        };
      }

      case "REMOVEWISHLIST": {
        const newWishlist = state.user.wishlist.filter((i) => i.id !== payload);
        return { ...state, user: { ...state.user, wishlist: newWishlist } };
      }

      case "SETWISHLIST": {
        return { ...state, user: { ...state.user, wishlist: payload } };
      }

      case "ADDTOCART": {
        return {
          ...state,
          user: { ...state.user, cart: [...state.user.cart, payload] },
        };
      }

      case "REMOVECART": {
        const newCart = state.user.cart.filter((i) => i.id !== payload);
        return {
          ...state,
          user: { ...state.user, cart: newCart },
        };
      }

      case "SETCART": {
        return { ...state, user: { ...state.user, cart: payload } };
      }

      default:
        return state;
    }
  }
  return [userData, userDataDispatch];
};
