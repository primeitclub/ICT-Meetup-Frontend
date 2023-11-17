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
   justifyContent={'space-between'}
   alignItems={'flex-start'}
   flexShrink={0}
   flexDirection={{
    base: 'column',
    lg: 'row'
   }}>
   <Show above="lg">
    {/* <Flex direction={'column'} w="500px" h="650px" borderRadius="24px">
     <img src={auth_robot} alt="gradient" />
    </Flex> */}
    <Flex direction={'column'} w={{ base: '100%', md: '500px' }} h="auto" borderRadius="24px">
     <img
      src={auth_robot}
      alt="gradient"
      style={{ width: '100%', height: 'auto', borderRadius: '24px' }}
     />
    </Flex>
   </Show>

   <RegisterForm />
  </Box>
 );
};

export default RegisterPage;
