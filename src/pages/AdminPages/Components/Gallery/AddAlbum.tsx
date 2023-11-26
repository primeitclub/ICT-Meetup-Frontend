import { Box, Flex } from '@chakra-ui/layout';
import { useForm } from 'react-hook-form';
import { AlbumFromSchema } from '../../DataSchemas/newAlbum';
import { albumScheme } from '../../DataSchemas/newAlbum';
import { zodResolver } from '@hookform/resolvers/zod';
import InputFieldAdmin from '../AdminInputFill';
import AdminFile from '../AdminFile';
import { Button } from '@chakra-ui/button';
import { useEffect } from 'react';

export default function AddAlbum() {
 const {
  handleSubmit,
  register,
  watch,
  setValue,
  getValues,
  formState: { errors }
 } = useForm<AlbumFromSchema>({
  resolver: zodResolver(albumScheme)
 });

 // onSubmit
 const onSubmit = (value: AlbumFromSchema) => {
  console.log(value);
 };

 //  watch
 const Formwatch = watch();

useEffect( ()=>{

        if(Formwatch.title){
            setValue('slug',slugify( Formwatch.title ))
        } 

} , [Formwatch.title])

// function 
function slugify( title:string ){

    const slug = title.toLocaleLowerCase().replace(/\s+/g, '-');
    const cleanSlug = slug.replace(/[^\w-]+/g, '');
    return cleanSlug;

}


 return (
  <>
   <Box width={'80%'} margin={'auto'} className="event_form">
    <Box
     className="Form_heaing"
     sx={{
      fontSize: '22px',
      textTransform: 'uppercase',
      fontWeight: 600,
      marginBottom: 8, 
      paddingLeft: 5
     }}>
     Add Album
    </Box>

    <Box
     boxShadow={'0px 0px 50px -40px black'}
     bg={'white'}
     sx={{ borderRadius: 10 }}
     p={12}
     className="form_wrap_album">
     <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={'column'} gap={6}>
       <InputFieldAdmin
        errors={errors.title}
        label="Title"
        placeholder="enter album title"
        type="text"
        field={register('title')}
        key={'title'}
        required={true}
       />

       <InputFieldAdmin
        errors={errors.slug}
        label="slug"
        placeholder="enter album slug"
        type="text"
        field={register('slug')}
        key={'slug'}
        required={true}
       />

       <InputFieldAdmin
        errors={errors.descriptio}
        label="descriptio"
        placeholder="enter album descriptio"
        type="textarea"
        field={register('descriptio')}
        key={'descriptio'}
        required={true}
       />

       <AdminFile
        errors={errors.thumbnail}
        label="Thubnail"
        registerName="thumbnail"
        register={register}
        key={'register'}
        watch={Formwatch.thumbnail}
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
     </form>
    </Box>
   </Box>
  </>
 );
}
