import { Button, Flex, Heading, Box, Text, Image } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import google from '../../../assets/google.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchemaType, registerSchema } from '../../../schema/registerSchema';
import InputField from '../../../components/ui/InputField';
import NepalFlag from '../../../assets/nepal.png';

export default function LoginForm() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm<RegisterSchemaType>({
  resolver: zodResolver(registerSchema)
 });

 const onSubmit = async (registerData: RegisterSchemaType) => {
  registerData.phone = `+977${registerData.phone}`;
  console.log(registerData);
 };

 return (
  <>
   <Box
    p={{ base: '20px', md: '25px', lg: '50px' }}
    w={{ base: '100%', md: '700px', lg: '600px' }}
    h={{ base: '160vh', md: '130vh', lg: '150vh', xl: '110vh' }}
    borderRadius="24px"
    background="rgba(9, 13, 27, 0.50)"
    // background={'red'}
    backdropFilter="blur(20px)">
    <Flex direction={'column'}>
     <Heading
      as="h3"
      fontSize={{ base: '24px', md: '32px' }}
      fontFamily="heading"
      fontWeight={700}
      color={'white'}>
      WELCOME!
     </Heading>

     <Text color={'#D6D6D6'} fontFamily="body">
      Create your account to register
     </Text>

     <Box
      paddingY={'36px'}
      display="inline-flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="36px">
      <Stack spacing={10} alignSelf="stretch">
       <form
        style={{
         display: 'flex',
         flexDirection: 'column',
         gap: '1rem'
        }}>
        <InputField
         errors={errors.username}
         field={register('username')}
         placeholder="Full Name"
         type="text"
        />

        <InputField
         errors={errors.email}
         field={register('email')}
         placeholder="Email"
         type="email"
        />

        <InputField
         errors={errors.password}
         field={register('password')}
         placeholder="Password"
         type="password"
        />

        <InputField
         errors={errors.re_password}
         field={register('re_password')}
         placeholder="Confirm Password"
         type="password"
        />

        <Flex
         width={'100%'}
         justifyContent={'space-between'}
         alignItems={'center'}
         position={'relative'}>
         <Flex width={'100px'}>
          <Image
           src={NepalFlag}
           position="absolute"
           alt="Nepal Flag"
           top="40%"
           right="0"
           transform="translateY(-50%)"
           width="20px"
           height={'20px'}
          />
          <InputField disabled placeholder="+977" type="tel" />
         </Flex>
         <Box width={'80%'}>
          <InputField
           errors={errors.phone}
           field={register('phone')}
           placeholder="Phone Number"
           type="tel"
          />
         </Box>
        </Flex>

        <InputField
         errors={errors.college_name}
         field={register('college_name')}
         placeholder="College Name"
         type="text"
        />
       </form>
      </Stack>

      <Flex
       direction={{ base: 'column', md: 'row' }}
       justifyContent={{ base: 'flex-start', md: 'space-between' }}
       alignItems={'center'}
       w="100%"
       gap="12px">
       <Flex alignItems="center" gap="4px">
        <input type="checkbox" {...register('TnCFlag')} />
        <Text fontFamily="body" color={'#D6D6D6'}>
         I agree to the <Link to="/terms">Terms and Conditions</Link>
        </Text>
       </Flex>

       <Text fontFamily="body" color={'#D6D6D6'}>
        Forgot your password?
       </Text>
      </Flex>
      <Box
       display="inline-flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
       gap={'12px'}>
       <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        variant={'primary-button'}
        w={{ base: '100%', md: '27vw' }}
        borderRadius={'none'}>
        Register Now
       </Button>
       <Text fontFamily="body" color={'#D6D6D6'}>
        Already have an account? <Link to="/login">Login</Link>
       </Text>
      </Box>
      <Text
       fontFamily="heading"
       color={'rgba(255, 255, 255, 0.60)'}
       w="73px"
       h="36px"
       fontSize={{ base: '16px', md: '24px' }}
       lineHeight={{ base: '24px', md: '36px' }}
       textTransform="uppercase">
       -OR-
      </Text>
      <Flex
       justifyContent="space-between"
       alignItems="center"
       w="100%"
       gap="34px"
       flexDirection={{ base: 'column', md: 'row' }}>
       <Flex
        padding={{ base: '8px', md: '8px 16px' }}
        display={{ base: 'flex', md: 'inline-flex' }}
        alignItems="center"
        gap="4px"
        borderRadius="8px"
        border="1px solid rgba(255, 255, 255, 0.12)"
        background="#0D0D0D"
        width="100%">
        <img src={google} alt="google" />
        <Text fontFamily="body" color={'#D6D6D6'}>
         Sign Up with Google
        </Text>
       </Flex>
       <Flex
        padding={{ base: '8px', md: '8px 16px' }}
        display={{ base: 'flex', md: 'inline-flex' }}
        alignItems="center"
        gap="4px"
        borderRadius="8px"
        border="1px solid rgba(255, 255, 255, 0.12)"
        background="#0D0D0D"
        width="100%">
        <img src={google} alt="google" />
        <Text fontFamily="body" color={'#D6D6D6'}>
         Sign Up with Google
        </Text>
       </Flex>
      </Flex>
     </Box>
    </Flex>
   </Box>
  </>
 );
}
