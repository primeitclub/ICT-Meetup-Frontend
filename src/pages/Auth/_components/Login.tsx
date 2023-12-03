import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaType } from '../../../schema/loginSchema';
import { Box, Button } from '@chakra-ui/react';
import RegistrationFormHeader from '../../../components/reusables/registration-form-header';
import InputField from '../../../components/ui/InputField';

export default function LoginFormHoookForm() {
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
   <Box
    maxW={{
     xl: '1100px',
     '2xl': '1440px'
    }}
    paddingX={{
     base: '32px',
     md: '64px',
     xl: '0px'
    }}
    margin={'auto'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    marginTop={'64px'}>
    <RegistrationFormHeader title="Login Form" description="Please submit to login" />

    <Box
     marginTop={'64px'}
     borderRadius={'24px'}
     backdropFilter={'blur(20px)'}
     maxW={'800px'}
     width={'100%'}
     padding={'64px 64px 103px 64px'}
     backgroundColor={'var(--form-background)'}
     boxShadow={'0px 0px 150px -10px #061847;'}>
     <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
       field={register('email')}
       errors={errors.email}
       label="Email"
       placeholder="Enter your email"
       required={true}
       type="text"
      />

      <InputField
       field={register('password')}
       errors={errors.password}
       label="Password"
       placeholder="Enter your password"
       required={true}
       type="password"
      />

      <Button type="submit" variant={'primary-button'} width={'full'} marginTop={'20px'}>
       Login
      </Button>
     </form>
    </Box>
   </Box>
  </>
 );
}
