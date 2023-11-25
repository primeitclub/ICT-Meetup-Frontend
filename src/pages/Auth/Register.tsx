import { Flex, Box } from '@chakra-ui/react';
import auth_robot from '../../assets/auth_robot.png';
import RegisterForm from './_components/registerform';
import { Show } from '@chakra-ui/react';

const RegisterPage = () => {
 return (
  <Box
   paddingY={{ base: '10px', lg: '20px' }}
   h={{ base: '165vh', md: '140vh', lg: '160vh', xl: '130vh' }}
   width={'85%'}
   margin={'auto'}
   position={'relative'}
   display={'flex'}
   alignItems={'flex-start'}
   justifyContent={'center'}
   flexShrink={0}>
   <RegisterForm />
  </Box>
 );
};

export default RegisterPage;
