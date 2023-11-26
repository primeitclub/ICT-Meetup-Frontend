import { Box, Button, Flex, Grid, Heading, Image, others } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AlbumData from './dataGallery.json';
import { ictVerson } from '../../../Gallery/components/Albums';
import { MdAutoDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';


interface dataAlbumProp {
    id:number,
    title:string,
    thumbnail:string,
    images:string[]
}

function GalleryAdmin() {


    const dataAlbum:dataAlbumProp[] = AlbumData

    dataAlbum.map( (item)=>{
    console.log(item.title)
} )

 return (
  <>
   <Box w={'90%'} margin={'auto'} className="gallery_wrap">
    <Flex justifyContent={'space-between'}>
     <Heading
      sx={{
       fontSize: '22px',
       textTransform: 'uppercase',
       fontWeight: 600,
       marginBottom: 8,
       paddingLeft: 5
      }}
      as={'h2'}>
      Image Gallery
     </Heading>

     <Box>
      <Link to={'add-album'}>
       <Button
        sx={{
         fontSize: '16px',
         bg: '#3889D5',
         p: '5px 20px',
         color: 'white',
         borderRadius: '10px',
         transition: '0.1s ease-out',
         _hover: {
          bg: 'blue.900'
         }
        }}>
        ADD ALBUM
       </Button>
      </Link>
     </Box>
    </Flex>

    <Box mt={10} className="gallery_wrap">
     <Grid templateColumns={'repeat(3,1fr)'} gap={10}>
      {dataAlbum.map((item: dataAlbumProp, index) => (
       <>
        <Box
         boxShadow={'0px 0px 50px -40px black'}
         borderRadius={'10px'}
         bg={'white'}
         key={index}
         className="single_album">
         <Box h={'40vh'} width={'auto'} className="image_wrap_album">
          <Image borderTopRadius={'7px'} objectFit={'cover'} src={item.thumbnail} height={'100%'} width={'100%'} />
         </Box>
         <Box p={5} className="content_text_album">
          <Heading as={'h2'} fontSize={'20px'} fontWeight={500}>
           {item.title}
          </Heading>
          <Flex justifyContent={'space-between'} mt={5}>
           <Link to={`${item.id}`} >
           <Button
            sx={{
             fontSize: '14px',
             bg: '#3889D5',
             p: '5px 15px',
             color: 'white',
             borderRadius: '10px',
             transition: '0.1s ease-out',
             _hover: {
              bg: 'blue.900'
             }
            }}>
            Manage Images
           </Button></Link>
           <Flex justifyContent={'space-between'} gap={3} className="edit_icons">
            <Box fontSize={'22px'}>
             <MdModeEdit />
            </Box>
            <Box fontSize={'22px'}>
             <MdAutoDelete />
            </Box>
           </Flex>
          </Flex>
         </Box>
        </Box>
       </>
      ))}
     </Grid>
    </Box>
   </Box>
  </>
 );
}

export default GalleryAdmin;
