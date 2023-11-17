import { Box } from '@chakra-ui/layout';
import HomePageTitle from '../reusables/HomePageTitle';

export default function SneakPeak() {
 return (
  <>
   <HomePageTitle pageTitle="Sneak Peak" />

   <Box py={'16'}>
    <video width="100%" height="auto">
     <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
     Your browser does not support the video tag.
    </video>
   </Box>
  </>
 );
}
