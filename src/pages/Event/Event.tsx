import {
 Box,
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
 Tabs,
 TabList,
 TabPanels,
 chakra,
 shouldForwardProp
} from '@chakra-ui/react';
import mic from "../../assets/mic.svg";
import PageTitle from '../../components/Global/PageTitle';
import { motion, isValidMotionProp, Transition } from 'framer-motion';
import { useState } from 'react';
import jsondata from '../../data/dataEvent.json';
import TabLists from './Components/TabLists';
// tab contens
import { MdLocationOn, MdOutlineDateRange } from 'react-icons/md';
import { FaRegClock } from "react-icons/fa6";

function EventPage() {
 const [_activeTab, setActiveTab] = useState(0);
 interface ObjectDataType {
  [key: string]: {
   event_title: string;
   event_speaker: string;
   date: string;
   time: string;
   location: string;
   image: string;
  }[];
 }

 const workShop: ObjectDataType = jsondata;

 //  framer motion

 const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
 });

 // for transition data , since typescript wont allow using it

 // declaring variable as transition type

 const customeTranstion: Transition = {
  duration: '0.3',
  ease: 'easeOut',
  type: 'spring',
  stiffness: 200,
  damping: 15
 };

 const FontCard = {
  color: '#FFF',
  fontStyle: 'normal'
 };


 return (
  <>
   <Box  width={{md:"100%",sm:"90%",base:"90%"}} margin={'auto'} height={'100%'} color={'white'}>
    <PageTitle pageTitle="Event" pageDescription="Find out what’s happening when" />

    {/* tab content begins */}

    <Box width={{ base: '100%', xl: '80%' }} margin={'auto'} className="tabWraper">
     <Tabs onChange={(index) => setActiveTab(index)}>
      <TabList
      className='event_list'
       whiteSpace={'nowrap'}
       display={'flex'}
      //  flexWrap={'nowrap'}
       overflow={{md:'scroll',sm:'scroll',base:'scroll'}}       
       justifyContent={{md:'space-around',sm:'start',base:'start'}}
       gap={{ md:"40px" , sm: '20px', base: '28px' }}
       sx={{
         '&::-webkit-scrollbar': {
           display: 'none', 
         },
         scrollbarWidth: 'none', 
         msOverflowStyle: 'none', 
       }}      
       >
       <TabLists />
      </TabList>

      <TabPanels overflowY={'visible'} mt={'69px'}>
       {Object.keys(workShop).map((dataIndex) => {
        const DataVariable = workShop[dataIndex];

        return (
         <MotionBox  initial={{ y: 100 }} animate={{ y: 0 }} transition={customeTranstion}>
          <TabPanel>
           {DataVariable.map((items) => {
            return (
             <Box className="single_event_card" sx={FontCard} pb={10}>
              <Card
               direction={{ base: 'column', md: 'row' }}
               border={'2px solid #3A3A3A;'}
               p={{ xl: '24px', lg: '24px', md: '24px', base: '28px 24px' }}
               borderRadius={16}
               gap={{ lg: '48px', md: '30px', base: '24px' }}
               background={'rgba(3, 3, 3, 0.20)'}
               backdropFilter={'blur(20px)'}
               sx={{
                '&:hover': {
                 background:
                  'linear-gradient(97deg, rgba(11, 41, 120, 0.38) -1.24%, rgba(7, 26, 74, 0.38) 49.38%, rgba(9, 37, 107, 0.33) 100%)',
                 border: '2px solid #2172EB;',
                 boxShadow: '0px 0px 150px -10px #061847',
                 backdropFilter: 'blur(20px)',
                 cursor: 'pointer',
                 '&_button': {
                  background: 'red.300 ',
                  color: 'black'
                 }
                }
               }}>
               <Box h={{  md: '266px', sm: 'auto', base: 'auto' }} >
               <Image
               borderRadius={'10px'}
                objectFit={'cover'}
                maxW={{ base: '100%', md: '315px' }}
                h={'100%'}
                src={items.image}
               />
               </Box>

               <Stack className="card_body" w={'100%'}>
                <CardBody>
                 <Box mb={2}>
                  <Heading
                   fontSize={{ lg: '32px', sm: '24px', base: '22px' }}
                   fontWeight={600}
                   lineHeight={{ lg: '36px', md: '34px', base: '30px' }}>
                   {items.event_title}
                  </Heading>
                 <Flex alignItems={'center'} gap={3} >
                    <Box mt={2} className='img_mic' width={'17px'} height={'17px'}>
                        <Image src={mic} height={'100%'} width={'100%'} />
                    </Box>
                    <Text
                   pt={{ base: '10px', sm: '' }}
                   fontSize={{ lg: '20px', sm: '18px', base: '18px' }}
                   fontWeight={500}>
                   {items.event_speaker}
                  </Text>
                 </Flex>
                 </Box>

                 <Flex
                  direction={'column'}
                  gap={3}
                  fontWeight={400}
                  lineHeight={{ md: '24px', base: '18px' }}
                  py={3}>

                  <Flex alignItems={'center'} gap={5}>
                   <MdLocationOn fill="white" style={{ color: 'white', fontSize: 21 }} />
                   <Text fontWeight={500} fontSize={{ lg: '20px', sm: '18px', base: '18px' }}>
                    Seminar hall, 3rd floor
                   </Text>
                  </Flex>
                  
                  <Flex alignItems={'center'} gap={5}>
                  <MdOutlineDateRange fill="white" style={{ color: 'white', fontSize: 21 }} />
                   <Text fontWeight={500} fontSize={{ lg: '20px', sm: '18px', base: '18px' }}>
                   {items.date}
                   </Text>
                  </Flex>

                  <Flex alignItems={'center'} gap={5}>
                   <FaRegClock fill="white" style={{ color: 'white', fontSize: 20 }} />
                   <Text fontWeight={500} fontSize={{ lg: '20px', sm: '18px', base: '18px' }}>
                   {items.time}
                   </Text>
                  </Flex>

                 </Flex>
                </CardBody>
                <CardFooter mt={{md:"",sm:"8px",base:"8px"}} gap={{ md:10, sm: 5, base: '5px' }} w={'100%'}>
                 <Button
                  sx={{
                   '&:hover': {
                    background: 'linear-gradient(92deg, #2C6DEC 0.11%, #003CD5 103.68%)'
                   }
                  }}
                  variant={'primary-button'}
                  p={{ md: '12px 24px', base: '10px 20px' }}
                 fontWeight={500}
                  w={{md:'50%',sm:'100%'}}
                  fontSize={{ lg: '24px', sm: '18px', base: '16px' }}>
                  Register Now
                 </Button>
                 <Button
                 borderRadius={"full"}
                  w={{md:'50%',sm:'100%'}}
                  variant={'outlined-button'}
                 fontWeight={500}
                  border={'3px solid blue'}
                  fontSize={{ lg: '24px', sm: '18px', base: '16px' }}
                  p={{ md: '12px 24px', base: '10px 20px' }}
                  color={'white'}>
                  Read More
                 </Button>
                </CardFooter>
               </Stack>
              </Card>
             </Box>
            );
           })}
          </TabPanel>
         </MotionBox>
        );
       })}
      </TabPanels>
     </Tabs>
    </Box>
   </Box>
  </>
 );
}

export default EventPage;
