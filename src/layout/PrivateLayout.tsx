import { useEffect, useState } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { Container } from "@chakra-ui/react";

import { useAuthStore } from "../store/auth/authStore";

const PrivateLayout = () => {
  const { isAuthenticated, getUser } = useAuthStore((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      await getUser();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    checkUser();
  }, []);

  return (
    <>
      {loading ? (
        <Container
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <h1>Loading...</h1>
        </Container>
      ) : isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default PrivateLayout;
