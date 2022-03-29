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
        let wish = [...state.user.wishlist];
        if (wish.some((i) => i.id === payload.id)) return state;
        state.user.wishlist = [...wish, payload];
        return { ...state };
      }
      case "REMOVEWISHLIST": {
        const newWishlist = state.user.wishlist.filter(
          (item) => payload !== item.id
        );
        state.user.wishlist = newWishlist;
        return { ...state };
      }
      case "SETWISHLIST": {
        state.user.wishlist = payload;
        return { ...state };
      }
      default:
        return state;
    }
  }
  return [userData, userDataDispatch];
};
