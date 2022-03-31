import { createContext, useContext } from "react";
import { useUserDataReducer } from "../../reducers/userDataReducer/reducer";

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, userDataDispatch] = useUserDataReducer();
  const isAuth = () =>
    userData.encodedToken !== "" && userData.encodedToken !== undefined;
  return (
    <>
      <UserDataContext.Provider value={{ userData, userDataDispatch, isAuth }}>
        {children}
      </UserDataContext.Provider>
    </>
  );
}

export const useUserData = () => useContext(UserDataContext);
