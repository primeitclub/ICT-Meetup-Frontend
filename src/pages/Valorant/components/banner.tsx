import { Box, Text, Button, Icon } from '@chakra-ui/react';
import valorantbg from '../../../assets/valorantbg.png';
import valorant from '../../../assets/valorant.png';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function ValoBanner() {
 return (
  <Box
   bg={`url(${valorantbg}) center/cover no-repeat`}
   width="100%"
   height={{ base: '50vh', md: '100vh' }}
   display="flex"
   flexDirection="column"
   justifyContent="center"
   alignItems="center">
   <Box
    py={{ base: '80px', md: '160px' }}
    bg={`url(${valorant}) no-repeat`}
    width={{ base: '80%', md: '807px' }}
    height={{ base: '80px', md: '166px' }}
    backgroundSize="contain"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center">
    <Text
     color="#FFF"
     fontFamily="body"
     fontWeight={700}
     fontSize={{ base: '16px', md: '28px' }}
     lineHeight={{ base: '20px', md: '28px' }}
     mt={{ base: '15px', md: '30px' }}>
     Join our competition.
    </Text>
   </Box>
   <Button
    background="linear-gradient(92deg, #54A2FE 2.7%, #4354E5 62.04%, #0B52BC 103.68%)"
    sx={{
     '&:hover': {
      background: 'linear-gradient(92deg, #54A2FE 2.7%, #4354E5 62.04%, #0B52BC 103.68%)'
     }
    }}
    boxShadow="0px 0px 20px 0px rgba(11, 82, 188, 0.80)"
    variant="primary-button"
    borderRadius="4px"
    display="inline-flex"
    padding={{ md: '16px 32px', base: '10px 20px' }}
    fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
    rightIcon={<Icon as={ArrowForwardIcon} boxSize={5} />}
    iconSpacing="8px"
    justifyContent="center"
    alignItems="center"
    gap="12px">
    Register Now
   </Button>
  </Box>
 );
}
