import { useLocation, useParams ,Navigate  } from 'react-router-dom';
import {
 Heading,
 Box,
 Image,
 Modal,
 ModalOverlay,
 ModalContent,
 ModalBody,
 ModalCloseButton,
 useDisclosure
} from '@chakra-ui/react';
import importedData from '../../../data/dataGallery.json';
import PageTitle from '../../../components/Global/PageTitle';
import React , { useState } from 'react';


interface Images {
 imagePath: string;
}

interface DataImages {
 [eventName: string]: Images[];
}

function SingleGallery() {


  // state to throw image url 
  const [imagaeUrl, setImagaeUrl] = useState<string>('')


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


//  function onClick 

const functioImage = ( getImagePath:string )=>{

  setImagaeUrl(getImagePath);

  onOpen();    

}


  // check if the current URL is valid, if not, navigate to /gallery
  const checkUrl = ['/gallery/ictV4', '/gallery/ictV5', '/gallery/ictV6'];
  const isValid = checkUrl.includes(useLocation().pathname);
 

  if (!isValid) {    
    return  <Navigate to={'/gallery'} />;
  }


 return (
  <>
   <Box minH={'100vh'} className="GalleryPhoto_wrap">
    <PageTitle pageTitle="Gallery" pageDescription={`Some of Glimps of ${eventName}`} />

   
      <Modal  finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay sx={ { background: ' rgba(0, 0, 0, 0.8)' } } />

        <ModalContent width={{ lg:'70%',md:'80%',sm:'90%',base:'90%' }} margin={'auto'} >          
          <ModalBody >
          <Box height={ {lg:'600px',sm:'500px',base:'100%'} } width={'fit-content'} margin={'auto'} position={'relative'}>
          <Image objectFit={'contain'} height="100%" w="100%" src={imagaeUrl} />
          <ModalCloseButton sx={{ background: ' rgba(0, 0, 0, 0.3)'}} p={1} borderRadius={'50%'} color={'white'} position={'absolute'} right={5} top={5} />

          </Box>
          </ModalBody>          
        </ModalContent>

      </Modal>
     

    <Box w={{ lg: '85%' }} margin={'auto'} className="gallery_container">
     <Box className="all_photos" sx={imageStyle} py={10}>
      {AllImages.map((item) =>
       item ? (
        <Image _hover={  {cursor:'pointer'} } onClick={ ()=>functioImage( item.imagePath ) } height="100%" mb={4} w="100%" src={item.imagePath} />
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


