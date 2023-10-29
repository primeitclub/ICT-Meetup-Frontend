import {
 Box,
 Tabs,
 TabList,
 TabPanels,
 TabPanel,
 Tab,
 Divider,
 shouldForwardProp,
 chakra,
 Image, Stack, Heading, Text, Flex
} from '@chakra-ui/react';

import { useState } from 'react';
import { motion, isValidMotionProp, Transition } from 'framer-motion';
import jsondata1 from '../../../data/dataSchedule.json'
import { DataSchedule } from './DataScheme/DataScheme';




function TabContent(  ) {

 const [activeTab, setActiveTab] = useState(0);

 console.log(jsondata1)


 //  framer motion

 const BoxSchedule = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
 });

 const customeTranstion: Transition = {
  duration: '0.3',
  ease: 'easeOut',
  type: 'spring',
  stiffness: 200,
  damping: 15
 };



//  store object array 

var arrayData:Array<''> ;

 return (

  <>
   <Tabs onChange={(index) => setActiveTab(index)}>
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

        {/* looopppp */}
{ Object.keys(jsondata1).map( (keyItem:any)=> (
     <BoxSchedule key={keyItem} initial={{ y: 100 }} animate={{ y: 0 }} transition={customeTranstion}>
  
     <TabPanel
   pt={'48px'}
   display={'flex'}
   flexDirection={'column'}
   gap={'24px'}
   className="time_event_wrap">
   {/* <BreakEvent /> */}



   
   {jsondata1[keyItem].map((item:any) => (

    <Box
     p={{ base: '15px', sm: '24px' }}
     sx={{
      border: '2px solid #383838',
      background: '#030303',
      '&:hover': {
       border: '2px solid #0055D5',
       transition: '0.2s ease-in',
       cursor: 'pointer'
      }
     }}
     className="single_program">
     <Flex flexDirection={{ sm: 'row', base: 'column' }} gap={7}>
      {item.EventType === 'Event' ? (
       <Box
        // here
        w={{ lg: '20%', md: '30%', sm: '40%', base: '100%' }}
        //  change in here
        h={{ base: '150px', sm: '125px' }}
        className="event_image">
        <Image src={item.EventImage} h={'100%'} w={'100%'} objectFit={'cover'} />
       </Box>
      ) : null}

      <Box w={{ lg: '80%', md: '70%', sm: '60%', base: '100%' }} className="event_detail">
       <Flex w={'100%'} justifyContent={'space-between'} className="Headings">
        <Stack>
         <Heading fontWeight={600} fontSize={{ lg: '24px', sm: '20px', base: '20px' }} as={'h4'}>
          {item.EventName}
         </Heading>
         <Heading
          as={'h5'}
          color={'#26A0F9'}
          fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
          fontWeight={400}
          lineHeight={'140%'}
          letterSpacing={'0.4px'}>
          {item.EventTimeStart} - {item.EventTimeEnd}
         </Heading>
        </Stack>
        <Box>
         {item.EventType === 'Event' ? (
          <Text borderRadius={'4px'} h={'fit-content'} bg={'#A40A0A'} p={'5px 12px'}>
           Event { item.ProgramType  }
          </Text>
         ) : null}
        </Box>
       </Flex>
       {/* change in here  */}
       <Flex
        fontWeight={400}
        lineHeight={'155%'}
        letterSpacing={'0.36px'}
        mt={5}
        fontSize={{ lg: '18px', sm: '16px', base: '16px' }}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Text>{item.EventAuthor}</Text>

        {item.EventType === 'Event' ? <Text>Room : {item.EventRoom}</Text> : null}
       </Flex>
      </Box>
     </Flex>
    </Box>
   ))}
  </TabPanel>
    </BoxSchedule>
) ) }




    </TabPanels>
   </Tabs>
  </>
 );
}

export default TabContent;
