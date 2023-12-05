import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { loginSchema, LoginSchemaType } from '../../../schema/loginSchema';
import { Flex, Box, Button, Heading, Text, InputGroup } from '@chakra-ui/react';

import { InputRightElement, IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import InputField from '../../../components/ui/InputField';

export default function CreateNewPassword() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm<LoginSchemaType>({
  resolver: zodResolver(loginSchema)
 });

 const [showPassword, setShowPassword] = useState(false);
 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
 };

 const onSubmit = async (data: LoginSchemaType) => {
  console.log(data);
 };
 return (
  <>
   <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
    <Box
     marginTop={'64px'}
     borderRadius={'24px'}
     backdropFilter={'blur(20px)'}
     maxW={'800px'}
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
      CREATE NEW PASSWORD
     </Heading>

     <Text color={'#D6D6D6'} fontFamily="body" marginTop={'20px'} marginBottom={'40px'}>
      Your new password must be unique from those previously used.
     </Text>

     <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup display={'flex'} flexDirection={'column'} padding={0}>
       <InputField
        field={register('password')}
        errors={errors.password}
        label=""
        type={showPassword ? 'text' : 'password'}
        placeholder="New password"
       />
       <InputRightElement>
        <IconButton
         aria-label={showPassword ? 'Hide Password' : 'Show Password'}
         onClick={togglePasswordVisibility}
         icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
        />
       </InputRightElement>
      </InputGroup>

      <InputGroup display={'flex'} flexDirection={'column'}>
       <InputField
        field={register('password')}
        errors={errors.password}
        label=""
        type={showPassword ? 'text' : 'password'}
        placeholder="New password"
       />
       <InputRightElement>
        <IconButton
         aria-label={showPassword ? 'Hide Password' : 'Show Password'}
         onClick={togglePasswordVisibility}
         icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
        />
       </InputRightElement>
      </InputGroup>

      <Button
       type="submit"
       variant={'primary-button'}
       width={'full'}
       marginTop={'40px'}
       borderRadius={0}>
       Reset Password
      </Button>
     </form>
    </Box>
   </Flex>
  </>
 );
}
