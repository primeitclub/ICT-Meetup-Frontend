import { Box } from '@chakra-ui/layout';
import { useForm } from 'react-hook-form';
import InputFieldAdmin from '../AdminInputFiled';

// form schemda
import { AddEventFormValues } from '../../DataSchemas/AddEventSchema';
import { addEventSchema } from '../../DataSchemas/AddEventSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';

// demo select
import SelectInput from '../AdminSelectInput';

function EventForm() {
 const {
  handleSubmit,
  register,
  formState: { errors }
 } = useForm<AddEventFormValues>({
  resolver: zodResolver(addEventSchema)
 });

 // onSubmit function
console.log(errors)

 const onSubmit = (value: AddEventFormValues) => {

   console.log(value);

  }

 return (
  <>
   <Box className="event_form">
    <Box className="Form_heaing">Add Event</Box>

    <Box bg={'white'} px={10} py={10} className="form_wrap">
     <form onSubmit={handleSubmit(onSubmit)}>
      <InputFieldAdmin
       key={'name'}
       required={true}
       label="Event Name"
       type="text"
       placeholder="Enter Event Title"
       field={register('title')}
       errors={errors.title}
      />

      <InputFieldAdmin
       key={'slug'}
       required={true}
       label="Event Slug"
       type="text"
       placeholder="Enter Event Slug"
       field={register('slug')}
       errors={errors.slug}
      />

      <SelectInput
       key={'event'}
       errors={errors.category}
       required={true}
       field={register('category')}
       label="Event Category"
       options={['Voulneter','Development','Helping Hands']}
      />

      <Button type="submit">Submit</Button>
     </form>
    </Box>
   </Box>
  </>
 );
}

export default EventForm;
