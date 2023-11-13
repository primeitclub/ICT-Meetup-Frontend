import { Flex, Box } from '@chakra-ui/react';
import auth_robot from '../../assets/auth_robot.png';
import LoginForm from './_components/loginform';
import { Show } from '@chakra-ui/react';

const LoginPage = () => {
 return (
  <Box
   paddingY={'10px'}
   h={'100vh'}
   width={'85%'}
   margin={'auto'}
   position={'relative'}
   display={'flex'}
   justifyContent={'space-between'}
   alignItems={'center'}
   flexShrink={0}
   flexDirection={{
    base: 'column',
    lg: 'row'
   }}>
   <Show above="lg">
    <Flex direction={'column'} w={{ base: '100%', md: '500px' }} h="auto" borderRadius="24px">
     <img
      src={auth_robot}
      alt="gradient"
      style={{ width: '100%', height: 'auto', borderRadius: '24px' }}
     />
    </Flex>
   </Show>

   <LoginForm />
  </Box>
 );
};

export default LoginPage;
