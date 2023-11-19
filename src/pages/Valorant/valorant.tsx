import { Box, Text } from '@chakra-ui/react';
import ValoBanner from './components/banner';
import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react';
import { useState } from 'react';
import MyTeam from './components/myTeam';
import AllTeams from './components/allTeams';

function ValorantPage() {
 const [selectedTab, setSelectedTab] = useState(0);

 const handleTabChange = (index: number) => {
  setSelectedTab(index);
 };

 return (
  <Box>
   <ValoBanner />

   <Box
    sx={{
     width: '100%',
     padding: { base: '4% 2%', md: '4% 4%' }
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

    <Tabs onChange={handleTabChange} index={selectedTab}>
     <TabList>
      <Tab
       _selected={{
        bg: 'var(--Primary-Gradient, linear-gradient(92deg, #2C84EC 0.11%, #0055D5 103.68%))'
       }}
       display={'flex'}
       width={{ base: '100%', md: '180px' }}
       padding={'12px 24px'}
       justifyContent={'center'}
       alignItems={'center'}
       gap={'8px'}
       color={'white'}
       border={'1px solid #0055D5'}
       borderRight={'0'}>
       All
      </Tab>
      <Tab
       _selected={{
        bg: 'var(--Primary-Gradient, linear-gradient(92deg, #2C84EC 0.11%, #0055D5 103.68%))'
       }}
       display={'flex'}
       width={{ base: '100%', md: '180px' }}
       padding={'12px 24px'}
       justifyContent={'center'}
       alignItems={'center'}
       gap={'8px'}
       color={'white'}
       border={'1px solid #0055D5'}>
       My Team
      </Tab>
     </TabList>

     <TabPanels>
      <TabPanel color="white">
       <AllTeams />
      </TabPanel>
      <TabPanel color={'white'}>
       <MyTeam />
      </TabPanel>
     </TabPanels>
    </Tabs>
   </Box>
  </Box>
 );
}

export default ValorantPage;
