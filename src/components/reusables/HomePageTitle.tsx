import { Box, Heading, Flex } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';

interface PageProps {
 pageTitle: string;
}

export default function HomePageTitle({ pageTitle }: PageProps) {
 const iconsStyle = {
  fontSize: { xl: '1.9rem', sm: '1.2rem', base: '1rem' },
  color: '#2C84EC'
 };

 return (
  <>
   <Flex alignItems={'center'} py={'8px'}>
    <Box margin={'auto'} w={'fit-content'}>
     <Flex alignItems={'center'} gap={5}>
      <Box sx={iconsStyle}>
       <AiOutlinePlus />
      </Box>
      <Heading as={'h1'} fontFamily={'heading'} variant={'section-header'}>
       {pageTitle}
       <Heading variant={'section-header'} as={'span'} color={'#E76028'}>
        .
        </Heading>
      </Heading>
      <Box sx={iconsStyle}>
       <AiOutlinePlus />
      </Box>
     </Flex>
    </Box>
   </Flex>
  </>
 );
}
