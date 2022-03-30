import { useUser } from "hooks/context/userDataContext";
import { Outlet, Navigate } from "react-router-dom";

export function ProtectedRoutes() {
  const { isAuth } = useUser();
  return isAuth() ? <Outlet /> : <Navigate to="/login" />;
}
