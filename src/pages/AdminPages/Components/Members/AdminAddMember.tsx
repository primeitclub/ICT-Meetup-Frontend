import { zodResolver } from '@hookform/resolvers/zod';
import { MemberSchema } from '../../DataSchemas/NewMember';
import { zodMember } from '../../DataSchemas/NewMember';

import { useForm, useWatch } from 'react-hook-form';
import { Box, Button, Flex } from '@chakra-ui/react';
import InputFieldAdmin from '../AdminInputFill';
import AdminFile from '../AdminFile';

import SelectInput from '../AdminSelectInput';

function AdminAddMember() {
 const {
  handleSubmit,
  register,
  watch,
  formState: { errors }
 } = useForm<MemberSchema>({
  resolver: zodResolver(zodMember)
 });

 const watchFields = watch();

 return (
  <>
   <Box width={'95%'} margin={'auto'} className="form_speaker">
    <Box
     className="Form_heaing"
     sx={{
      fontSize: '22px',
      textTransform: 'uppercase',
      fontWeight: 600,
      marginBottom: 8,
      paddingLeft: 5
     }}>
     Add Member
    </Box>

    <Flex
     direction={'column'}
     gap={7}
     boxShadow={'0px 0px 50px -40px black'}
     bg={'white'}
     sx={{ borderRadius: 10 }}
     p={12}
     className="form_wrap">
     <InputFieldAdmin
      label="Name"
      placeholder="Speaker Name"
      type="text"
      field={register('name')}
      errors={errors.name}
      required={true}
      key={'name'}
     />

     

       <SelectInput
        label="Category"
        errors={errors.batch}
        field={register('batch')}
        required={true}
        key={'batch'}
        options={['OrganizeR Team', 'Volunteer','Development Team']}
       />

     <AdminFile
      label="file"
      registerName="image"
      errors={errors.image}
      register={register}
      key={'image'}
      watch={watchFields.image}
     />

     <InputFieldAdmin
      label="Description"
      placeholder="Speaker Description"
      type="textarea"
      field={register('description')}
      errors={errors.description}
      required={true}
      key={'description'}
     />

     <InputFieldAdmin
      label="Facebook"
      placeholder="https/"
      type="text"
      field={register('facebook')}
      errors={errors.facebook}
      required={false}
      key={'facebook'}
     />

     <InputFieldAdmin
      label="Twitter"
      placeholder="https/"
      type="text"
      field={register('twitter')}
      errors={errors.twitter}
      required={false}
      key={'twitter'}
     />

     <InputFieldAdmin
      label="Linkedin"
      placeholder="https/"
      type="text"
      field={register('linkedin')}
      errors={errors.linkedin}
      required={false}
      key={'linkedin'}
     />

     <Button
      type="submit"
      bg={'blue.300'}
      transition={'0.1s ease-in'}
      _hover={{ bg: 'blue.700', color: 'white' }}
      py={4}
      borderRadius={10}>
      Submit
     </Button>
    </Flex>
   </Box>
  </>
 );
}

export default AdminAddMember;
