import { Box } from '@chakra-ui/react';

import RegisterForm from './_components/registerform';

const RegisterPage = () => {
  return (
    <Box
      paddingY={{ base: '25px', lg: '50px' }}
      paddingX={{ base: '20px', md: '25px', lg: '50px' }}
      margin={'auto'}
      position={'relative'}
      display={'flex'}
      alignItems={'flex-start'}
      justifyContent={'center'}
      flexShrink={0}
    >
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
