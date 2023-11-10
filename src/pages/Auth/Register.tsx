import { Flex, Box } from '@chakra-ui/react';
import auth_robot from '../../assets/auth_robot.png';
import RegisterForm from './_components/registerform';

const RegisterPage = () => {
 return (
  <Box
   paddingY={{
    base: '10px',
    lg: '10px'
   }}
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
   <Flex direction={'column'} w="500px" h="700px" borderRadius="24px">
    <img src={auth_robot} alt="gradient" />
   </Flex>

   <RegisterForm />
  </Box>
 );
};

export default RegisterPage;
