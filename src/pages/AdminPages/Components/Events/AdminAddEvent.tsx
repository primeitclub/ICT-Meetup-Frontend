import { useForm } from 'react-hook-form';
import { FormControl, FormLabel, FormErrorMessage, Input, Button } from '@chakra-ui/react';
import { z, ZodType } from 'zod';

// Define Zod schema for form validation
const schema = z.object({
  name: z.string(),
  last:z.string(),
});

// make a requred object to make it easy 
const validatedData = {
  name:{
    required:'your name'
  },

  last:{
    required:'your lastname'
  }
  
}

type FormValues = z.infer<typeof schema>;

const EventForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({});

  // function onSubmit
  const onSubmit = async (values: FormValues) => {
    try {
      // Validate the form values using the Zod schema
      const validatedData = schema.parse(values);
      console.log('Validated data:', validatedData);
      // Perform form submission logic here
    } catch (error) {
      console.error('Validation error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor='name'>FIRST NAME</FormLabel>
        <Input
          id='name'
          placeholder='Name'
          {...register('name',validatedData.name)} // No need for additional validation rules here
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.last}>
        <FormLabel htmlFor='name'>LAST NAME</FormLabel>
        <Input
          id='last'
          placeholder='last'
          {...register('last',validatedData.last)} // No need for additional validation rules here
        />
        <FormErrorMessage>
          {errors.last && errors.last.message}
        </FormErrorMessage>
      </FormControl>


      <Button type='submit' isLoading={isSubmitting} colorScheme='teal'>
        Submit
      </Button>
    </form>
  );
};

export default EventForm;
