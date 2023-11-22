import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button } from '@chakra-ui/react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    eventCategory: '',
    description: '',
    registrationLink: '',
    venues: '',
  });

  const eventCategories = ['Category 1', 'Category 2', 'Category 3'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or validation here with formData
    console.log(formData);
  };

  return (
    <Box maxWidth="400px" margin="0 auto">
      
        <FormControl marginBottom="20px">
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </FormControl>
        <FormControl marginBottom="20px">
          <FormLabel>Slug</FormLabel>
          <Input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Enter slug"
          />
        </FormControl>
        <FormControl marginBottom="20px">
          <FormLabel>Event Category</FormLabel>
          <Select
            name="eventCategory"
            value={formData.eventCategory}
            onChange={handleChange}
            placeholder="Select event category"
          >
            {eventCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl marginBottom="20px">
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </FormControl>
        <FormControl marginBottom="20px">
          <FormLabel>Registration Link</FormLabel>
          <Input
            type="text"
            name="registrationLink"
            value={formData.registrationLink}
            onChange={handleChange}
            placeholder="Enter registration link"
          />
        </FormControl>
        <FormControl marginBottom="20px">
          <FormLabel>Venues</FormLabel>
          <Textarea
            name="venues"
            value={formData.venues}
            onChange={handleChange}
            placeholder="Enter venues"
          />
        </FormControl>
        <Button 
        colorScheme="blue"
         type="submit">
          Submit
        </Button>
    </Box>
  );
};

export default EventForm;
