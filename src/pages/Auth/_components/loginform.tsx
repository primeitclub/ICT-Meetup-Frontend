import { Button, Flex, Heading, Box, Text, IconButton } from '@chakra-ui/react';
import { Input, Stack, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import google from '../../../assets/google.png';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
 const [showPassword, setShowPassword] = useState(false);
 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
 };
 return (
  <>
   <Box
    p={{ base: '20px', md: '25px', lg: '50px' }}
    w={{ base: '100%', md: '700px', lg: '600px' }}
    h={{ base: '110vh', md: '90vh', lg: '110vh', xl: '90vh' }}
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
      LOGIN
     </Heading>

     <Text color={'#D6D6D6'} fontFamily="body">
      Log in to your account
     </Text>

     <Box
      paddingY={'36px'}
      display="inline-flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="36px">
      <Stack spacing={10} alignSelf="stretch">
       <Input
        background={'transparent'}
        _focus={{
         outline: 'none'
        }}
        // variant="flushed"
        borderBottom="1px rgba(255, 255, 255, 0.38) solid"
        type="email"
        placeholder="Email Address"
        fontFamily={'body'}
        color="white"
       />
       <InputGroup borderBottom="1px rgba(255, 255, 255, 0.38) solid">
        <Input
         background={'transparent'}
         _focus={{
          outline: 'none'
         }}
         // variant="flushed"

         type={showPassword ? 'text' : 'password'}
         placeholder="Password"
         fontFamily={'body'}
         color="white"
        />
        <InputRightElement>
         <IconButton
          aria-label={showPassword ? 'Hide Password' : 'Show Password'}
          onClick={togglePasswordVisibility}
          icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
         />
        </InputRightElement>
       </InputGroup>
      </Stack>

      <Flex
       direction={{ base: 'column', md: 'row' }}
       justifyContent={{ base: 'flex-start', md: 'space-between' }}
       alignItems={'center'}
       w="100%"
       gap={{ base: '8px', md: '12px' }}>
       {/* <FormControl display="flex" alignItems="center">
        <Box display="flex" alignItems="center" border="1px solid white" p="2" mr="2">
         <Checkbox color="white" defaultChecked />
        </Box>
        <FormLabel color="white">Remember me</FormLabel>
       </FormControl> */}
       <Checkbox colorScheme="white" defaultChecked color="#D6D6D6">
        Remember me
       </Checkbox>

       <Text fontFamily="body" color={'#D6D6D6'}>
        Forgot your password?
       </Text>
      </Flex>
      <Box
       display="inline-flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
       gap={'18px'}>
       <Button
        variant={'primary-button'}
        w={{ base: '100%', md: '27vw' }}
        minW="27vw"
        borderRadius={'none'}>
        Login
       </Button>
       <Text fontFamily="body" color={'#D6D6D6'}>
        Dont have an account? <Link to="/register">Register Now</Link>
       </Text>
      </Box>
      <Text
       fontFamily="heading"
       color={'rgba(255, 255, 255, 0.60)'}
       fontWeight={700}
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
        display={'inline-flex'}
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
        display={'inline-flex'}
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
