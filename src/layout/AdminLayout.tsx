import { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { Box, Flex, Spinner, Text } from "@chakra-ui/react";

import { checkAdmin } from "../api/auth";
import NavbarAdmin from "../pages/AdminPages/Components/Navbar";

function MainAdmin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const isAdmin = async () => {
      const response = await checkAdmin();
      if (response.success === true) {
        if (response.data.userType !== "admin") {
          // If user is not an admin, redirect to home page
          navigate("/");
        }
      } else {
        setIsLoading(false); // Set loading to false only if admin check is successful
        navigate("/");
      }
      setIsLoading(false); // Set loading to false if admin check fails
    };
    isAdmin();
  }, [navigate]);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner size="xl" /> {/* Or any other loading indicator */}
      </Flex>
    );
  }

  return (
    <>
      <Box minH={"100vh"} marginTop={"-60px"}>
        <Flex minH={"100vh"} className="admin_content_wrap">
          <Box
            width={"18%"}
            bg={"#040D2A"}
            color={"white"}
            py={6}
            className="admin_navbar"
          >
            <NavbarAdmin />
          </Box>

          <Box
            bg={"#f3f4f6"}
            width={"82%"}
            px={5}
            py={10}
            className="dashboard_content"
          >
            <Text>
              <Outlet />
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default MainAdmin;
