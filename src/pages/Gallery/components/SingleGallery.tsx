import { useParams } from 'react-router-dom';
import {
 Heading,
 Text,
 Box,
 Image,
 Button,
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalFooter,
 ModalBody,
 ModalCloseButton,
 useDisclosure
} from '@chakra-ui/react';
import importedData from '../../../data/dataGallery.json';
import PageTitle from '../../../components/Global/PageTitle';
import React from 'react';


interface Images {
 imagePath: string;
}

interface DataImages {
 [eventName: string]: Images[];
}

function SingleGallery() {


  // modal box
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null)

// data hadnel
 const { eventName }: any = useParams<{ eventName: string }>();
 const dataImages: DataImages = importedData;
 const AllImages = dataImages[eventName];

 // image css
 const imageStyle = {
  columnCount: { lg: '3', md: '2', sm: 1, base: '1' },
  columnWidth: '33.33%'
 };





//  testt
AllImages.map( (item)=>{
  console.log(item)
} )

 return (
  <>
   <Box className="GalleryPhoto_wrap">
    <PageTitle pageTitle="Gallery" pageDescription={`Some of Glimps of ${eventName}`} />

   
      <Modal  finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay sx={ { background: ' rgba(0, 0, 0, 0.8)' } } />
        <ModalContent   background={'red.400'} height={'100%'} width={'fit-content'} margin={'auto'} >
          
          <ModalCloseButton position={'absolute'} right={5} top={5} />
          <ModalBody height={'90%'} >
          <Image objectFit={'contain'} onClick={onOpen} height="100%" mb={4} w="100%" src="https://picsum.photos/seed/picsum/700/500" />
          </ModalBody>

          
        </ModalContent>
      </Modal>
     

    <Box w={{ lg: '85%' }} margin={'auto'} className="gallery_container">
     <Box className="all_photos" sx={imageStyle} py={10}>
      {AllImages.map((item) =>
       item ? (
        <Image _hover={  {cursor:'pointer'} } onClick={onOpen} height="100%" mb={4} w="100%" src={item.imagePath} />
       ) : (
        <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
         <Box fontSize={80} color="white">
          <Heading>Loading...</Heading>
         </Box>
        </Box>
       )
      )}
     </Box>
    </Box>
   </Box>
  </>
 );
}

export default SingleGallery;

{
 /* <Image height={'100%'} mb={4} w={'100%'} src={item.imagePath ? item.imagePath : dummyImage} /> */
}
