import {
 Box,
 Tabs,
 TabList,
 TabPanels,
 Tab,
 TabPanel,
 Divider
} from '@chakra-ui/react';

import SingleEvent from './SingleEvent';

function TabContent() {
 return (
  <>
   <Tabs>
    <Box pb={'48px'} className="tab_list_wrpa" width={'fit-content'} margin={'auto'}>
     <TabList
      gap={2}
      fontSize={{ lg: '24px', sm: '20px', base: '20px' }}
      fontWeight={600}
      lineHeight={'150%'}>

      <Tab
       p={'16px 20px'}
       border={'2px solid transparent'}
       _selected={{ border: '2px solid #0055D5' }}>
       Dec 12
      </Tab>

      <Tab
       p={'16px 20px'}
       border={'2px solid transparent'}
       _selected={{ border: '2px solid #0055D5' }}>
       Dec 13
      </Tab>

     </TabList>
    </Box>

    <Divider border={'1px solid #0E1A3B'} />

   

     <TabPanels>
        
      <TabPanel pt={'48px'} display={'flex'} flexDirection={'column'} gap={'24px'} className="time_event_wrap">

            <SingleEvent/>

            <SingleEvent/>
       
            <SingleEvent/>
       
            <SingleEvent/>

            <SingleEvent/>

      </TabPanel >



      <TabPanel pt={'48px'} display={'flex'} flexDirection={'column'} gap={'24px'} className="time_event_wrap" >

            <SingleEvent/>

            <SingleEvent/>

            <SingleEvent/>

      </TabPanel>

     </TabPanels>
   </Tabs>
  </>
 );
}

export default TabContent;
