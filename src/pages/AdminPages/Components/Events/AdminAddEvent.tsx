import { Box, Flex } from '@chakra-ui/layout';
import { useForm } from 'react-hook-form';
import InputFieldAdmin from '../AdminInputFill';
import {useState} from "react";
// form schemda
import { AddEventFormValues } from '../../DataSchemas/AddEventSchema';
import { addEventSchema } from '../../DataSchemas/AddEventSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';

// demo select
import SelectInput from '../AdminSelectInput';
import AdminFile from '../AdminFile';

function EventForm() {


    // state to copy from slug 
    const [slug, setSlug] = useState<any>("");


 const {
  handleSubmit,
  register,
  watch,
  formState: { errors }
 } = useForm<AddEventFormValues>({
  resolver: zodResolver(addEventSchema)
 });

 // onSubmit function

 const onSubmit = (value: AddEventFormValues) => {
  console.log(value);
 };

 const watchFields = watch();


console.log(slug);

 return (
  <>
   <Box width={'95%'} margin={'auto'} className="event_form">
    <Box
     className="Form_heaing"
     sx={{
      fontSize: '22px',
      textTransform: 'uppercase',
      fontWeight: 600,
      marginBottom: 8,
      paddingLeft: 5,      
     }}>
     Add Event
    </Box>

    <Box
     boxShadow={'0px 0px 50px -40px black'}
     bg={'white'}
     sx={{ borderRadius: 10 }}
     p={12}
     className="form_wrap">
     <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={'column'} gap={6}>

       <InputFieldAdmin
        setSlug={setSlug}
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
        options={['Voulneter', 'Development', 'Helping Hands']}
       />

       <InputFieldAdmin
        key={'venue'}
        required={true}
        label="Event Venue"
        type="text"
        placeholder="Enter Venue"
        field={register('venue', { required: 'Venue is Required' })}
        errors={errors.venue}
       />

       <InputFieldAdmin
        key={'link'}
        required={true}
        label="Event Reg Link"
        type="text"
        placeholder="Enter Registration Link"
        field={register('registrationLink')}
        errors={errors.registrationLink}
       />

       <InputFieldAdmin
        key={'text'}
        required={true}
        label="Event Description"
        type="textarea"
        placeholder="Enter Description"
        field={register('description')}
        errors={errors.description}
       />

       <InputFieldAdmin
        key={'eventDate'}
        required={true}
        label="Event Date"
        type="date"
        placeholder="Event Date"
        field={register('eventDate' , {required:"please enter a date"})}
        errors={errors.eventDate}
       />

       <InputFieldAdmin
        key={'startTime'}
        required={true}
        label="Start At"
        type="time"
        placeholder="Event Time"
        field={register('startTime' , {required:"please enter a time"})}
        errors={errors.startTime}
       />

       <AdminFile
       errors={errors.eventThumbnail}
       registerName='eventThumbnail'
       label='eventThumbnail'
       key={'file upload'}
       register={register}
       watch={watchFields.eventThumbnail}
       />



       <Button
        type="submit"
        bg={'blue.300'}
        transition={'0.1s ease-in'}
        _hover={{ bg: 'blue.700' ,color:'white'}}
        py={4}
        borderRadius={10}>
        Submit
       </Button>
      </Flex>
     </form>
    </Box>
   </Box>
  </>
 );
}

export default EventForm;
