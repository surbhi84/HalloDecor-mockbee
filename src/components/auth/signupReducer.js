import { useReducer } from "react";

export function useSignup() {
  const [signupInfo, signupDispatch] = useReducer(signup, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPwd: "",
    tAC: false,
  });

  function signup(state, { type, payload }) {
    switch (type) {
      case "FIRSTNAME":
        return { ...state, firstName: payload };
      case "LASTNAME":
        return { ...state, lastName: payload };
      case "EMAIL":
        return { ...state, email: payload };
      case "PWD":
        return { ...state, password: payload };
      case "CONFIRMPWD":
        return { ...state, confirmPwd: payload };
      case "TAC":
        return { ...state, tAC: !state.tAc };
      default:
        return state;
    }
  }
  return [signupInfo, signupDispatch];
}
