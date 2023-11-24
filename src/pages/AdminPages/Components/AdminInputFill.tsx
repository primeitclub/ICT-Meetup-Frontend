import { Box, FormLabel, Input, Text, Textarea } from '@chakra-ui/react';
import {useState} from "react";

interface Props {
 placeholder: string;
 label: string;
 errors: any;
 type: string;
 field?: any;
 required?: boolean;
 setSlug?:(value:any)=>void
}

export default function InputFieldAdmin(props: Props) {


let setSlugFunction= props.setSlug;

// handelOnchnage
const handelOnchnage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
  const valueInput = event.target.value;
  console.log(valueInput)

    if(setSlugFunction){
      setSlugFunction(valueInput)
    }else {
      console.log("set slug never loaded")
    }
}


 return (
  <Box >
   <FormLabel htmlFor={props.label}>
    {
     <Box
      display={'flex'}
      textColor={'#A2A2A2'}
      fontFamily={'body'}
      fontSize={'16px'}
      fontStyle={'normal'}
      fontWeight={'100'}
      color={'#252525'}
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
   </FormLabel>

    { props.type === "textarea" ?  (  
      <Textarea
      className={`custom-input-admin `}
      {...props.field}
      type={props.type}
      placeholder={props.placeholder}
      >

      </Textarea>
    ) : (
        <input
        onChange={handelOnchnage}
        className={`custom-input-admin `}
        {...props.field}
        type={props.type}
        placeholder={props.placeholder}
       />
    ) }

  
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
  </Box>
 );
}
