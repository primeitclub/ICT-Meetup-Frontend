import { Box, Heading , Text, Flex } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

interface PageProps {
    pageTitle : string,
    pageDescription : string
}

function PageTitle( { pageTitle , pageDescription} : PageProps ) {

    const iconsStyle = {
        fontSize: { xl: "1.9rem", sm: "1.2rem", base: "1rem" }, 
        color: "#2C84EC",
      };

    return ( <>
    
    <Flex alignItems={'center'} h={ { lg:246 , base:200 } }>
    <Box margin={'auto'} w={'fit-content'} >
        <Flex alignItems={'center'} gap={5} >
        <Box sx={iconsStyle} >
            <AiOutlinePlus/>
        </Box>
        <Heading as={'h1'} fontFamily={'heading'} variant={'section-header'}>
          { pageTitle }  
        </Heading>
        <Box sx={iconsStyle}>
            <AiOutlinePlus/>
        </Box>
        </Flex>
      
        <Text textAlign={'center'} fontSize={ { sm:'16px', base:'14px' } }>
            {pageDescription}
        </Text>
    </Box>
    </Flex>

    </> );
}

export default PageTitle;