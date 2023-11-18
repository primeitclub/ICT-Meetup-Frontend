import { Box, Container } from '@chakra-ui/react';
import MainRoute from './router/MainRoute';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import MobileMenu from './components/Global/MobileMenu';

function App() {
 return (
  <Box
   // bg="radial-gradient(132.21% 68.86% at 43.76% 52.23%, #040E2C 0.47%, rgba(0, 0, 0, 0.80) 100%)"
   // bg="#020618"
   // width={"100vw"}
   // height={"100vh"}
   className="main-body">
   <Box
    // maxW={{
    //  base: '90%',
    //  xl: '1440px'
    // }}
    margin={'auto'}>
    <Navbar />
    <Container
     display={{
      base: 'flex',
      lg: 'none'
     }}>
     <MobileMenu />
    </Container>
    <MainRoute />
    <Footer />
   </Box>
  </Box>
 );
}

export default App;
