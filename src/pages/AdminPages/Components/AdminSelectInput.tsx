import { Box, Text } from '@chakra-ui/layout';
import { FormLabel, Select } from '@chakra-ui/react';


interface SelectInput {
    label:string,
    options:any,
    required?:boolean,
    field?:any,
    errors:any
}



function SelectInput( {label , options , required , field , errors} : SelectInput ) {
 return (
  <>
   <Box className="select_input">
   <FormLabel htmlFor="Select">
    {
     <Box
      display={'flex'}
      textColor={'#A2A2A2'}
      fontFamily={'body'}
      fontSize={'18px'}
      fontStyle={'normal'}
      fontWeight={'100'}
      color={'#252525'}
      lineHeight={'150%'}>
     {label}
      {true ? (
       <Text marginLeft={'5px'} textColor={'red'}>
        *
       </Text>
      ) : (
       ''
      )}
     </Box>
    }
   </FormLabel>

    <Select 
    {...field}
    onChange={ (e)=>{
        const valueChange = e.target.value;
        if(valueChange === "Select an option"){
        field.onChange("");
        }
    } }
    placeholder="Select option">
        {options?.map( (item:any)=>(
            <option value="option1">{item}</option>
        ) )}   
    </Select>

    {
    <Text
     marginTop={'12px'}
     color={'red'}
     fontFamily={'body'}
     fontSize={'14px'}
     fontStyle={'normal'}
     fontWeight={'100'}
     lineHeight={'150%'}>
     {errors?.message}
    </Text>
   }

   </Box>
  </>
 );
}

export default SelectInput;
