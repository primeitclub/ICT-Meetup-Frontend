import PageTitle from '../../components/Global/PageTitle';
import Albums from './components/Albums';
import { Box } from '@chakra-ui/react';

function Gallery() {
 return (
  <>
   <Box height={ {lg:'100vh' ,md:'100%'} } >
   <PageTitle pageTitle="Gallery" pageDescription="A glimpse of the past events" />

    <Albums/>
   </Box>

  </>
 );
}

export default Gallery;

