import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../store/auth/authStore";

export default function PrivateRouteLayout() {
  const { isAuthenticated } = useAuthStore((state) => state);
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />}</>;
}
