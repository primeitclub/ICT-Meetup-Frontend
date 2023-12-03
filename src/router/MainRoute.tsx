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
      <Box className='main-body '>
        <Box margin={'auto'} className='main-body-wrapper'>
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
