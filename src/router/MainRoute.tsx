import { Box } from "@chakra-ui/react";

// import AdminRoute from "./AdminRoute";
import PublicRoutes from "./PublicRoutes";

const MainRoute = () => {
  return (
    <>
      <Box className="main-body ">
        <Box margin={"auto"} marginTop={"60px"} className="main-body-wrapper">
          <PublicRoutes />
        </Box>
      </Box>
    </>
  );
};

export default MainRoute;
