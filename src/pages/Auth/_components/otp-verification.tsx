import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaType } from '../../../schema/loginSchema';
import { Flex, Box, Button, Heading, Text, Input } from '@chakra-ui/react';

export default function OTPlogin() {
 const {
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
     maxW={{ base: '350px', md: '500px', lg: '800px', xl: '800px' }}
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
      OTP VERIFICATION
     </Heading>

     <Text color={'#D6D6D6'} fontFamily="body" marginTop={'20px'} marginBottom={'40px'}>
      Enter the verification code we just sent on your email address.
     </Text>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       {[0, 1, 2, 3, 4, 5].map((index) => (
        <Input
         key={index}
         type="text"
         maxLength={1}
         textAlign="center"
         mx={1}
         width={{ base: '35px', md: '45px', lg: '55px', xl: '55px' }}
         height={{ base: '35px', md: '45px', lg: '55px', xl: '55px' }}
         fontSize="lg"
         borderRadius="8px"
         background={'transparent'}
         color={'white'}
         border="1px solid rgba(255, 255, 255, 0.38)"
         borderWidth={2}
         margin={'10px'}
        />
       ))}
      </div>

      <Button
       type="submit"
       variant={'primary-button'}
       width={'full'}
       marginTop={'40px'}
       borderRadius={0}>
       Send Code
      </Button>

      <Text fontFamily="body" color={'#D6D6D6'} textAlign={'center'} marginTop={'10px'}>
       Didn’t receive code? Resend
      </Text>
     </form>
    </Box>
   </Flex>
  </>
 );
}
