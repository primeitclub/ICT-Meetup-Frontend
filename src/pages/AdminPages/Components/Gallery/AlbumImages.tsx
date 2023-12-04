import { Box, Image } from "@chakra-ui/react";
import { useParams ,Navigate , useLocation } from "react-router-dom"
import dataGallery from "../../../../data/dataGallery.json";

export default function AlbumImages() {

    // valid check fucntion 
    const checkUrl = ['/gallery/ictV4', '/gallery/ictV5', '/gallery/ictV6'];
    const isValid = checkUrl.includes(useLocation().pathname);
   
  
    // if (!isValid) {    
    //   return  <Navigate to={'/gallery'} />;
    // }

    const siteId = useParams<any>();


    // data images
    const dataImages: any = dataGallery.ictV4;

    const imageStyle = {
        columnCount: { lg: '3', md: '2', sm: 1, base: '1' },
        columnWidth: '33.33%'
       };


  return (
    <>

   <Box w={'90%'} margin={'auto'} className="album_images_wrap">
   <Box
     className="Form_heaing"
     sx={{
      fontSize: '22px',
      textTransform: 'uppercase',
      fontWeight: 600,
      marginBottom: 8, 
      paddingLeft: 5
     }}>
     Add Images For ict v4
    </Box>

    <Box className="all_image">
        <Box sx={imageStyle} >
            { dataImages.map( (item:any)=>(
                <Box mb={3} >
                    <Image
                    height={'100%'}
                    width="100%"
                    src={item.imagePath}
                    />
                </Box>
            ) ) }

        </Box>
    </Box>

   </Box>
    
    </>
  )
}
