import { Button, Flex, Heading, Box, Text, IconButton } from '@chakra-ui/react';
import { Input, Stack, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Checkbox, FormControl, FormLabel } from '@chakra-ui/react';
import google from '../../../assets/google.png';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function LoginForm() {
 const [showPassword, setShowPassword] = useState(false);
 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
 };
 return (
  <>
   <Box
    paddingY={{
     base: '50px',
     lg: '50px'
    }}
    padding={{
     base: '50px',
     lg: '50px'
    }}
    w="600px"
    h="880px"
    // flexShrink={0}
    borderRadius="24px"
    background="rgba(9, 13, 27, 0.50)"
    // background={'red'}
    backdropFilter="blur(20px)">
    <Flex direction={'column'}>
     <Heading as="h3" fontSize={'32px'} fontFamily="heading" fontWeight={700} color={'white'}>
      Welcome!
     </Heading>

     <Text
      //   w="644px"
      //   h="798px"
      //   flexShrink={0}
      color={'#D6D6D6'}
      fontFamily="body"
      //   fontSize="20px"
      //   fontStyle="normal"
      //   fontWeight={400}
      //   lineHeight="28px"
      //   letterSpacing="0.4px"
     >
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
       <Input
        background={'transparent'}
        _focus={{
         outline: 'none'
        }}
        // variant="flushed"
        borderBottom="1px rgba(255, 255, 255, 0.38) solid"
        placeholder="Full Name"
        fontFamily={'body'}
        color="white"
       />

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

       <Input
        background={'transparent'}
        _focus={{
         outline: 'none'
        }}
        // variant="flushed"
        borderBottom="1px rgba(255, 255, 255, 0.38) solid"
        type="tel"
        placeholder="Phone no."
        fontFamily={'body'}
        color="white"
       />

       <Input
        background={'transparent'}
        _focus={{
         outline: 'none'
        }}
        // variant="flushed"
        borderBottom="1px rgba(255, 255, 255, 0.38) solid"
        placeholder="College Name"
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
       <InputGroup borderBottom="1px rgba(255, 255, 255, 0.38) solid">
        <Input
         background={'transparent'}
         _focus={{
          outline: 'none'
         }}
         // variant="flushed"

         type={showPassword ? 'text' : 'password'}
         placeholder="Confirm Password"
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

      <Flex justifyContent="space-between" alignItems="center" w="100%">
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
       gap={'12px'}>
       <Button variant={'primary-button'} w="37vw" borderRadius={'none'}>
        Register Now
       </Button>
       <Text fontFamily="body" color={'#D6D6D6'}>
        Already have an account? Login
       </Text>
      </Box>
      <Text
       fontFamily="heading"
       color={'rgba(255, 255, 255, 0.60)'}
       w="73px"
       h="36px"
       fontWeight={700}
       fontSize={'24px'}
       lineHeight="36px"
       textTransform="uppercase">
       -OR-
      </Text>
      <Flex justifyContent="space-between" alignItems="center" w="100%" gap="34px">
       <Flex
        display="inline-flex"
        padding="8px 16px"
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
        display="inline-flex"
        padding="8px 16px"
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
