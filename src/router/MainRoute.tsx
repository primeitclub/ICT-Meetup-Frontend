import AdminRoute from './AdminRoute';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Navbar from '../components/Global/Navbar';
import { Box } from '@chakra-ui/react';

const MainRoute = () => {
 // check for auth status if user is logged in and show private/public routes accordingly
 const isAuth = false;

 return (
  <>
   <Box
    // bg="radial-gradient(132.21% 68.86% at 43.76% 52.23%, #040E2C 0.47%, rgba(0, 0, 0, 0.80) 100%)"
    // bg="#020618"
    // width={"100vw"}
    // height={"100vh"}
    className="main-body">
    <Box
     //  maxW={{
     //   base: '100%',
     //   xl: '1440px'
     //  }}
     margin={'auto'}>
     <Navbar />
     {/* make conditionals for private and public routing according to the auth status */}
     {isAuth && <PrivateRoutes />}
     {!isAuth && <PublicRoutes />}
    </Box>
   </Box>
  </>
 );
};

export default MainRoute;
