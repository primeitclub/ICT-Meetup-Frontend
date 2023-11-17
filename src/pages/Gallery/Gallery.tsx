import PageTitle from '../../components/Global/PageTitle';
import Albums from './components/Albums';
import { Box } from '@chakra-ui/react';

function Gallery() {
 return (
  <>
   <Box minH={'100vh'} >
   <PageTitle pageTitle="Gallery" pageDescription="A glimpse of the past events" />

    <Albums/>
   </Box>

  </>
 );
}

export default Gallery;

