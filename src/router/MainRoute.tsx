import { Box } from "@chakra-ui/react";

// import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const MainRoute = () => {
  return (
    <>
      <Box className="main-body ">
        <Box margin={"auto"} className="main-body-wrapper">
          <PrivateRoutes />
          <PublicRoutes />
        </Box>
      </Box>
    </>
  );
};

export default MainRoute;
