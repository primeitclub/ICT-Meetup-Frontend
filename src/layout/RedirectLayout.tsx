import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../store/auth/authStore";

const RedirectLayout = () => {
  const { isAuthenticated } = useAuthStore((state) => state);

  return <>{!isAuthenticated ? <Outlet /> : <Navigate to="/" replace />}</>;
};

export default RedirectLayout;
