import { Box, Heading , Text,Flex} from "@chakra-ui/react";

interface HeaderTitleProps {
    headerTitle : string,
    headerDescription : string
}

function TeamHeader( { headerTitle , headerDescription } : HeaderTitleProps ) {


    const FontHeader = {
        fontFamily : 'Syncopate',
        color:'white' ,
        fontWeight:700,
        letterSpacing:'0.64px',
        
        fontSize: { lg:'32px',md:'28px',sm:'28px',base:'26px' },
        textAlign:'center' 

    }

    const FontDescription = {
        fontFamily:"Nunito Sans",
        fontSize: { lg:'18px',md:'18px',sm:'16px',base:'14px' },
        fontStyle:"normal",
        fontWeight:"400",
        color:'white',
        textAlign:'center',
    }

    return ( <>
    
       <Flex width={'auto'} m={'auto'} direction='column' gap={18} className="Team_header_wrap" pt={'70px'} pb={'55'} >

           <Heading sx={ FontHeader } textTransform={'uppercase'} as={'h2'} >
                { headerTitle }
           </Heading>
           <Text sx={FontDescription} >
            {headerDescription} 
           </Text>

       </Flex>

    </> );
}

export default TeamHeader;