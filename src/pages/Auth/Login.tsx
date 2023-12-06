import { Flex, Box } from '@chakra-ui/react';
import auth_robot from '../../assets/auth_robot.png';
import LoginForm from './_components/loginform';
import { Show } from '@chakra-ui/react';

const LoginPage = () => {
 return (
  <Box
   paddingY={{ base: '10px', lg: '20px' }}
   h={{ sm: '100%',base:"100%" }}
   width={'85%'}
   margin={'auto'}
   position={'relative'}
   display={'flex'}
   justifyContent={'center'}
   alignItems={'center'}
   flexShrink={0}
   flexDirection={{
    base: 'column',
    lg: 'row'
   }}>
   <LoginForm />
  </Box>
 );
};

export default LoginPage;
