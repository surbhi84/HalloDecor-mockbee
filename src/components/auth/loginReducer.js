import { useReducer } from "react";

export function useLogin() {
  const [loginInfo, loginInfoDispatch] = useReducer(login, {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    rememberMe: false,
  });

  function login(state, { type, payload }) {
    switch (type) {
      case "EMAIL":
        return { ...state, email: payload };
      case "PWD":
        return { ...state, password: payload };
      case "REMEMBER":
        return { ...state, rememberMe: !state.rememberMe };
      default:
        state;
    }
  }
  return [loginInfo, loginInfoDispatch];
}
