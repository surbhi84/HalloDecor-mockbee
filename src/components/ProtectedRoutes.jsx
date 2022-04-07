import { useUserData } from "hooks/context/userDataContext";
import { Outlet, Navigate } from "react-router-dom";

export function ProtectedRoutes() {
  const { isAuth } = useUserData();
  return isAuth() ? <Outlet /> : <Navigate to="/login" />;
}
