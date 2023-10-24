import {
 Box,
 Tabs,
 TabList,
 TabPanels,
 Tab,
 TabPanel,
 Card,
 Image,
 Stack,
 CardBody,
 CardFooter,
 Button,
 Heading,
 Text,
 Flex,
 Divider
} from '@chakra-ui/react';

import TimeAndEvents from './TimeAndEvents';

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

    <Box className="tabPanelsWrap">
     <TabPanels>
        
      <TabPanel>
       {/* Time Interval Events */}

       <TimeAndEvents/>

       <Flex pt={'48px'} flexDirection={'column'} gap={'24px'} className="time_event_wrap">
        <Box
         bg={'#030303'}
         border={'2px solid #383838'}
         p={{ base: '15px', sm: '24px' }}
         className="time_header">
         <Heading fontWeight={600} fontSize={{ lg: '24px', sm: '20px', base: '20px' }} as={'h4'}>
          Registration and check-in
         </Heading>
         <Heading
          as={'h5'}
          color={'#26A0F9'}
          fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
          fontWeight={400}
          lineHeight={'140%'}
          letterSpacing={'0.4px'}>
          8:00 - 9:00 AM
         </Heading>
         <Text
          mt={5}
          fontSize={{ lg: '18px', sm: '16px', base: '16px' }}
          fontWeight={400}
          lineHeight={'155%'}
          letterSpacing={'0.36px'}>
          Register Desk
         </Text>
        </Box>
        {/* Single Timer Div */}
        <Box
         bg={'#030303'}
         border={'2px solid #383838'}
         p={{ base: '15px', sm: '24px' }}
         className="single_program">
         <Flex flexDirection={{ sm: 'row', base: 'column' }} gap={7}>
          <Box
           w={{ lg: '20%', md: '30%', sm: '40%', base: '100%' }}
           h={{ base: '150px', sm: '125px' }}
           className="event_image">
           <Image
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            h={'100%'}
            w={'100%'}
            objectFit={'cover'}
           />
          </Box>

          <Box w={{ lg: '80%', md: '70%', sm: '60%', base: '100%' }} className="event_detail">
           <Flex w={'100%'} justifyContent={'space-between'} className="Headings">
            <Stack>
             <Heading
              fontWeight={600}
              fontSize={{ lg: '24px', sm: '20px', base: '20px' }}
              as={'h4'}>
              AI-Enabled newsroom
             </Heading>
             <Heading
              as={'h5'}
              color={'#26A0F9'}
              fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
              fontWeight={400}
              lineHeight={'140%'}
              letterSpacing={'0.4px'}>
              8:00 - 9:00 AM
             </Heading>
            </Stack>
            <Box>
             <Text borderRadius={'4px'} h={'fit-content'} bg={'#A40A0A'} p={'5px 12px'}>
              Event
             </Text>
            </Box>
           </Flex>
           <Text
            mt={5}
            fontSize={{ lg: '18px', sm: '16px', base: '16px' }}
            fontWeight={400}
            lineHeight={'155%'}
            letterSpacing={'0.36px'}>
            Robert Wilson
           </Text>
          </Box>
         </Flex>
        </Box>

        <Box
         bg={'#030303'}
         border={'2px solid #383838'}
         p={{ base: '15px', sm: '24px' }}
         className="single_program">
         <Flex flexDirection={{ sm: 'row', base: 'column' }} gap={7}>
          <Box
           w={{ lg: '20%', md: '30%', sm: '40%', base: '100%' }}
           h={{ base: '150px', sm: '125px' }}
           className="event_image">
           <Image
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            h={'100%'}
            w={'100%'}
            objectFit={'cover'}
           />
          </Box>

          <Box w={{ lg: '80%', md: '70%', sm: '60%', base: '100%' }} className="event_detail">
           <Flex w={'100%'} justifyContent={'space-between'} className="Headings">
            <Stack>
             <Heading
              fontWeight={600}
              fontSize={{ lg: '24px', sm: '20px', base: '20px' }}
              as={'h4'}>
              AI-Enabled newsroom
             </Heading>
             <Heading
              as={'h5'}
              color={'#26A0F9'}
              fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
              fontWeight={400}
              lineHeight={'140%'}
              letterSpacing={'0.4px'}>
              8:00 - 9:00 AM
             </Heading>
            </Stack>
            <Box>
             <Text borderRadius={'4px'} h={'fit-content'} bg={'#A40A0A'} p={'5px 12px'}>
              Event
             </Text>
            </Box>
           </Flex>
           <Text
            mt={5}
            fontSize={{ lg: '18px', sm: '16px', base: '16px' }}
            fontWeight={400}
            lineHeight={'155%'}
            letterSpacing={'0.36px'}>
            Robert Wilson
           </Text>
          </Box>
         </Flex>
        </Box>
       </Flex>

       {/* Time Interval Events */}
       <Flex pt={'48px'} flexDirection={'column'} gap={'24px'} className="time_event_wrap">
        <Box
         bg={'#030303'}
         border={'2px solid #383838'}
         p={{ base: '15px', sm: '24px' }}
         className="time_header">
         <Heading fontWeight={600} fontSize={{ lg: '24px', sm: '20px', base: '20px' }} as={'h4'}>
          Registration and check-in
         </Heading>
         <Heading
          as={'h5'}
          color={'#26A0F9'}
          fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
          fontWeight={400}
          lineHeight={'140%'}
          letterSpacing={'0.4px'}>
          8:00 - 9:00 AM
         </Heading>
         <Text
          mt={5}
          fontSize={{ lg: '18px', sm: '16px', base: '16px' }}
          fontWeight={400}
          lineHeight={'155%'}
          letterSpacing={'0.36px'}>
          Register Desk
         </Text>
        </Box>
        {/* Single Timer Div */}
        <Box
         bg={'#030303'}
         border={'2px solid #383838'}
         p={{ base: '15px', sm: '24px' }}
         className="single_program">
         <Flex flexDirection={{ sm: 'row', base: 'column' }} gap={7}>
          <Box
           w={{ lg: '20%', md: '30%', sm: '40%', base: '100%' }}
           h={{ base: '150px', sm: '125px' }}
           className="event_image">
           <Image
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            h={'100%'}
            w={'100%'}
            objectFit={'cover'}
           />
          </Box>

          <Box w={{ lg: '80%', md: '70%', sm: '60%', base: '100%' }} className="event_detail">
           <Flex w={'100%'} justifyContent={'space-between'} className="Headings">
            <Stack>
             <Heading
              fontWeight={600}
              fontSize={{ lg: '24px', sm: '20px', base: '20px' }}
              as={'h4'}>
              AI-Enabled newsroom
             </Heading>
             <Heading
              as={'h5'}
              color={'#26A0F9'}
              fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
              fontWeight={400}
              lineHeight={'140%'}
              letterSpacing={'0.4px'}>
              8:00 - 9:00 AM
             </Heading>
            </Stack>
            <Box>
             <Text borderRadius={'4px'} h={'fit-content'} bg={'#A40A0A'} p={'5px 12px'}>
              Event
             </Text>
            </Box>
           </Flex>
           <Text
            mt={5}
            fontSize={{ lg: '18px', sm: '16px', base: '16px' }}
            fontWeight={400}
            lineHeight={'155%'}
            letterSpacing={'0.36px'}>
            Robert Wilson
           </Text>
          </Box>
         </Flex>
        </Box>

        <Box
         bg={'#030303'}
         border={'2px solid #383838'}
         p={{ base: '15px', sm: '24px' }}
         className="single_program">
         <Flex flexDirection={{ sm: 'row', base: 'column' }} gap={7}>
          <Box
           w={{ lg: '20%', md: '30%', sm: '40%', base: '100%' }}
           h={{ base: '150px', sm: '125px' }}
           className="event_image">
           <Image
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            h={'100%'}
            w={'100%'}
            objectFit={'cover'}
           />
          </Box>

          <Box w={{ lg: '80%', md: '70%', sm: '60%', base: '100%' }} className="event_detail">
           <Flex w={'100%'} justifyContent={'space-between'} className="Headings">
            <Stack>
             <Heading
              fontWeight={600}
              fontSize={{ lg: '24px', sm: '20px', base: '20px' }}
              as={'h4'}>
              AI-Enabled newsroom
             </Heading>
             <Heading
              as={'h5'}
              color={'#26A0F9'}
              fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
              fontWeight={400}
              lineHeight={'140%'}
              letterSpacing={'0.4px'}>
              8:00 - 9:00 AM
             </Heading>
            </Stack>
            <Box>
             <Text borderRadius={'4px'} h={'fit-content'} bg={'#0A91A4'} p={'5px 12px'}>
              Session
             </Text>
            </Box>
           </Flex>
           <Text
            mt={5}
            fontSize={{ lg: '18px', sm: '16px', base: '16px' }}
            fontWeight={400}
            lineHeight={'155%'}
            letterSpacing={'0.36px'}>
            Robert Wilson
           </Text>
          </Box>
         </Flex>
        </Box>
       </Flex>

      </TabPanel>

      <TabPanel>13</TabPanel>
     </TabPanels>
    </Box>
   </Tabs>
  </>
 );
}

export default TabContent;
