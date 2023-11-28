import { Box } from '@chakra-ui/react';

import Footer from '../components/Global/Footer';
import MobileMenu from '../components/Global/MobileMenu';
import Navbar from '../components/Global/Navbar';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const MainRoute = () => {
  // check for auth status if user is logged in and show private/public routes accordingly

  return (
    <>
      <Box
        // bg="radial-gradient(132.21% 68.86% at 43.76% 52.23%, #040E2C 0.47%, rgba(0, 0, 0, 0.80) 100%)"
        // bg="#020618"
        // width={"100vw"}
        // height={"100vh"}
        className='main-body'
      >
        <Box
          //  maxW={{
          //   base: '100%',
          //   xl: '1440px'
          //  }}
          margin={'auto'}
        >
          <Navbar />
          <MobileMenu />
          {/* make conditionals for private and public routing according to the auth status */}
          <PrivateRoutes />
          <PublicRoutes />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default MainRoute;
