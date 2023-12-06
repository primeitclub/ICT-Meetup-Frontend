import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react';
import auth_robot from '../../../assets/auth_robot.png';
import { useNavigate } from 'react-router-dom';

export default function Successful() {
 const Navigate = useNavigate();

 const handleBackToLogin = () => {
  // Navigate to the login page
  Navigate('/login'); // Replace '/login' with the actual path of your login page
 };
 return (
  <Box
   paddingY={{ base: '10px', lg: '10px' }}
   h={{ base: '115vh', md: '100vh', lg: '90vh', xl: '90vh' }}
   width={{ base: '350px', md: '500px', lg: '550px', xl: '550px' }}
   margin={'auto'}
   position={'relative'}
   display={'flex'}
   justifyContent={'center'}
   alignItems={'center'}
   flexDirection={'column'}>
   <Flex direction={'column'} h="auto" borderRadius="24px">
    <img
     src={auth_robot}
     alt="gradient"
     style={{ width: '100%', height: '60vh', borderRadius: '24px' }}
    />
   </Flex>
   <Heading
    as="h3"
    fontSize={{ base: '24px', md: '32px' }}
    fontFamily="heading"
    fontWeight={700}
    color={'white'}>
    PASSWORD CHANGED !!
   </Heading>

   <Text color={'#D6D6D6'} fontFamily="body" marginTop={'0px'} marginBottom={'20px'}>
    Your password has been changed successfully!
   </Text>

   <Button
    type="submit"
    variant={'primary-button'}
    width={'full'}
    marginTop={'20px'}
    borderRadius={0}
    onClick={handleBackToLogin}>
    Back to Login
   </Button>
  </Box>
 );
}
