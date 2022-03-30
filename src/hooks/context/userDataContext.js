import { createContext, useContext, useState } from "react";
import { useUserData } from "../../reducers/userDataReducer/reducer";

const userDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, userDataDispatch] = useUserData();
  const isAuth = () =>
    userData.encodedToken !== "" && userData.encodedToken !== undefined;
  return (
    <>
      <userDataContext.Provider value={{ userData, userDataDispatch, isAuth }}>
        {children}
      </userDataContext.Provider>
    </>
  );
}

export const useUser = () => useContext(userDataContext);
