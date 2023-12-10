import { Navigate, Outlet } from "react-router-dom";

import { getTokenFromStorage } from "../helpers/localStorage";

const PrivateLayout = () => {
  const isAuthenticated = getTokenFromStorage();
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />}</>;
};

export default PrivateLayout;
