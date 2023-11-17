import { Text, Box, Flex } from '@chakra-ui/layout';
import HomePageTitle from '../reusables/HomePageTitle';
import HomeSwiper from './HomeSlider';
import { Link } from 'react-router-dom';

export default function Speakers() {
 return (
  <>
   <HomePageTitle pageTitle="Our Speakers" />

   <Box py={'16'}>
    <HomeSwiper />
    <Flex justifyContent={'center'} mt={'16'}>
     <Link to="/speakers">
      <Text
       as={'button'}
       w={'fit-content'}
       margin={'auto'}
       fontSize={'32px'}
       color={'white'}
       fontWeight={'700'}>
       View All Speakers
      </Text>
     </Link>
    </Flex>
   </Box>
  </>
 );
}
