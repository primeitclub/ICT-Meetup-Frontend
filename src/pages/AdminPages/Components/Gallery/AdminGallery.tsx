import { Box, Flex, Heading } from "@chakra-ui/react";
import dataGallery from "../../../../data/dataGallery.json";
import { Link } from "react-router-dom";


function GalleryAdmin() {

    console.log(dataGallery);

return ( <>
    
           <Box className="gallery_wrap" >

                <Flex>

                    <Heading as={'h2'} >
                        Image Gallery 
                    </Heading>

                    <Box>
                        <Link to={''} ></Link>
                    </Box>

                </Flex>

           </Box>

    </> );
}

export default GalleryAdmin;