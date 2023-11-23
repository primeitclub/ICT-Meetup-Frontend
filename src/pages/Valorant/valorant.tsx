import { Box, Text } from '@chakra-ui/react';
import ValoBanner from './components/banner';
import TabSection from './components/TabSection';

function ValorantPage() {
 return (
  <Box>
   <ValoBanner />
   <Box
    sx={{
     width: '100%',
     padding: { base: '4% 2%', md: '4% 4%' },
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center'
    }}>
    <Text
     color="#FFF"
     fontFamily="heading"
     fontSize={{ base: '36px', md: '64px' }}
     fontWeight={700}
     lineHeight={{ base: '52px', md: '92px' }}
     letterSpacing="1.44px"
     textTransform="uppercase"
     display={'flex'}
     flexDirection={'row'}>
     The Teams
     <Text color="var(--Secondary, #E76028)">.</Text>
    </Text>
    <TabSection />
   </Box>
  </Box>
 );
}

export default ValorantPage;
