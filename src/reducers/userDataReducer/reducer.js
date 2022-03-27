import { useReducer } from "react";

export const useUser = () => {
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
    }
  }
  return [userData, userDataDispatch];
};
