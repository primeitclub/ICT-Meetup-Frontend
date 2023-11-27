import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaType } from '../../../schema/loginSchema';
import { Flex, Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import InputField from '../../../components/ui/InputField';

export default function ForgetPassword() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm<LoginSchemaType>({
  resolver: zodResolver(loginSchema)
 });

 const onSubmit = async (data: LoginSchemaType) => {
  console.log(data);
 };
 return (
  <>
   <Flex minHeight={'100vh'} alignItems={'center'} justifyContent={'center'}>
    <Box
     marginTop={'64px'}
     borderRadius={'24px'}
     backdropFilter={'blur(20px)'}
     maxW={{ base: '500px', md: '800px', lg: '800px', xl: '800px' }}
     width={'100%'}
     padding={'64px 64px 103px 64px'}
     backgroundColor={'var(--form-background)'}
     boxShadow={'0px 0px 150px -10px #061847;'}>
     <Heading
      as="h3"
      fontSize={{ base: '24px', md: '32px' }}
      fontFamily="heading"
      fontWeight={700}
      color={'white'}>
      FORGOT PASSWORD?
     </Heading>

     <Text color={'#D6D6D6'} fontFamily="body" marginTop={'20px'} marginBottom={'40px'}>
      Please enter your email address linked with your account!
     </Text>

     <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
       label=""
       field={register('email')}
       errors={errors.email}
       placeholder="Email Address"
       type="text"
      />

      <Button
       type="submit"
       variant={'primary-button'}
       width={'full'}
       marginTop={'40px'}
       borderRadius={0}>
       Send Code
      </Button>
      <Text fontFamily="body" color={'#D6D6D6'} textAlign={'center'} marginTop={'10px'}>
       Remember password? <Link to="/login"> Back to Login</Link>
      </Text>
     </form>
    </Box>
   </Flex>
  </>
 );
}
