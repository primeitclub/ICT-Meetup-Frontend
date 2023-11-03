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
        textTransformation:'uppercase',
        fontSize: { lg:'32px',md:'28px',sm:'28px',base:'26px' },
        textAlign:'center' 

    }

    const FontDescription = {
        fontFamily:"Nunito Sans",
        fontSize:"18px",
        fontStyle:"normal",
        fontWeight:"400",
        lineHeight:"0%" ,
        color:'white'
    }

    return ( <>
    
       <Flex width={'fit-content'} m={'auto'} direction='column' gap={18} className="Team_header_wrap" mb={55} >

           <Heading sx={ FontHeader }  as={'h2'} >
                { headerTitle }
           </Heading>
           <Text sx={ FontDescription } >
            {headerDescription} 
           </Text>

       </Flex>

    </> );
}

export default TeamHeader;