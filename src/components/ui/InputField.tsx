import { Box, Text } from '@chakra-ui/react';

interface Props {
 placeholder: string;
 label: string;
 errors: any;
 type: string;
 field?: any;
 required?: boolean;
}

export default function InputField(props: Props) {
 return (
  <div>
   <label htmlFor={props.label}>
    {
     <Box
      display={'flex'}
      textColor={'#A2A2A2'}
      fontFamily={'body'}
      fontSize={'20px'}
      fontStyle={'normal'}
      fontWeight={'100'}
      lineHeight={'150%'}>
      {props.label}
      {props.required ? (
       <Text marginLeft={'5px'} textColor={'red'}>
        *
       </Text>
      ) : (
       ''
      )}
     </Box>
    }
   </label>
   <input
    className={`custom-input ${props.errors ? 'error-input' : ''}`}
    {...props.field}
    type={props.type}
    placeholder={props.placeholder}
   />
   {
    <Text
     marginTop={'12px'}
     color={'red'}
     fontFamily={'body'}
     fontSize={'14px'}
     fontStyle={'normal'}
     fontWeight={'100'}
     lineHeight={'150%'}>
     {props.errors?.message}
    </Text>
   }
  </div>
 );
}
