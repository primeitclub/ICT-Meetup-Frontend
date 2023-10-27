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
 chakra,
 shouldForwardProp
} from '@chakra-ui/react';
import PageTitle from '../../components/Global/PageTitle';
import { MdLocationOn, MdOutlineDateRange } from 'react-icons/md';
import { motion , isValidMotionProp , Transition  } from 'framer-motion';
import { useState} from 'react';
import jsondata from '../../data/dataEvent.json';


function EventPage() {

  console.log(jsondata.workshop)

  // to monitor tab changes
const [activeTab, setActiveTab] = useState(0);

// to set values for motion

 const FontCard = {
  fontFamily: 'Nunito Sans',
  color: '#FFF',
  fontStyle: 'normal'
 };

//  framer motion 

  const MotionBox = chakra( motion.div , {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  } )


  // for transition data , since typescript wont allow using it  

  // declaring variable as transition type 
  
  const customeTranstion : Transition = {

      duration:"0.3",
      ease: "easeOut",
      type: "spring", 
      stiffness: 200, 
      damping: 15, 

  }

 return (
  <>
   <Box height={'100%'} color={'white'}>
    <PageTitle pageTitle="Event" pageDescription="Find out what’s happening when" />

    {/* tab content begins */}

    <Box width={{ base: '100%', xl: '80%' }} margin={'auto'} className="tabWraper">
     <Tabs onChange={(index) => setActiveTab(index)} >
      <TabList
       whiteSpace={'nowrap'}
       display={'flex'}
       flexWrap={'wrap'}
       justifyContent={'space-around'}
       gap={{ sm: '', base: '20px' }}>
        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Wokshop
        </Tab>

        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Wokshop
        </Tab>


        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Wokshop
        </Tab>


        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Wokshop
        </Tab>

      </TabList>

      <TabPanels mt={'69px'}>

       
        
           <TabPanel  >
           <MotionBox 
        initial ={ {y:100} }
        animate= {{ y:0 }}
        transition={customeTranstion} 

        >
            <Box className="single_event_card" sx={FontCard} pb={10}>
             <Card
              direction={{ base: 'column', md: 'row' }}
              border={'2px solid #3A3A3A;'}
              p={{ xl: '48px 44px', lg: '44px 40px', md: '32px 28px', base: '28px 24px' }}
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
                backdropFilter:'blur(20px)',
                cursor: 'pointer',
                '&_button': {
                 background: 'red.300 ',
                 color: 'black'
                }
               }
              }}>
              <Image
               objectFit={'cover'}
               maxW={{ base: '100%', md: '315px' }}
               h={{ sm: '330px', md: 'auto', base: 'auto' } }
               
               src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              />

              <Stack   className="card_body" w={'100%'}>
               <CardBody>
                <Box mb={4} >
                <Heading
                 fontSize={{ lg: '32px', sm: '24px', base: '20px' }}
                 fontWeight={600}
                 lineHeight={{ lg: '36px', md: '34px', base: '30px' }}>
                 Event Title
                </Heading>
                <Text
                 pt={{ base: '10px', sm: '' }}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 fontWeight={500}>
                 Speaker : Rikesh Dai
                </Text>
                </Box>

                <Flex
                 direction={'column'}
                 gap={5}                 
                 fontSize={{ lg: '16px', sm: '14px', base: '14px' }}
                 fontWeight={400}
                 lineHeight={{ md: '24px', base: '18px' }}
                 py={5}>
                 <Flex gap={5}>
                  <MdLocationOn fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Text>Rikesh ko ghar ma</Text>
                 </Flex>
                 <Flex gap={5} alignItems={'center'}>
                  <MdOutlineDateRange fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Flex direction={'column'} gap={2}>
                   <Text>2022</Text>
                   <Text>10 baje</Text>
                  </Flex>
                 </Flex>
                </Flex>
               </CardBody>
               <CardFooter mt={4} gap={{ sm: 10, base: '20px' }} w={'100%'}>
                <Button
                 sx={{
                  '&:hover': {
                   background: 'linear-gradient(93deg, #2C84EC 12.34%, #000AE9 84.22%)'
                  }
                 }}
                 variant={'primary-button'}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 w={'50%'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}>
                 Register Now
                </Button>
                <Button
                 w={'50%'}
                 variant={'outlined-button'}
                 border={'3px solid blue'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 color={'white'}>
                 Read More
                </Button>
               </CardFooter>
              </Stack>
             </Card>
            </Box>
            </MotionBox>
         </TabPanel>

         <TabPanel  >
           <MotionBox 
        initial ={ {y:100} }
        animate= {{ y:0 }}
        transition={customeTranstion} 

        >
            <Box className="single_event_card" sx={FontCard} pb={10}>
             <Card
              direction={{ base: 'column', md: 'row' }}
              border={'2px solid #3A3A3A;'}
              p={{ xl: '48px 44px', lg: '44px 40px', md: '32px 28px', base: '28px 24px' }}
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
                backdropFilter:'blur(20px)',
                cursor: 'pointer',
                '&_button': {
                 background: 'red.300 ',
                 color: 'black'
                }
               }
              }}>
              <Image
               objectFit={'cover'}
               maxW={{ base: '100%', md: '315px' }}
               h={{ sm: '330px', md: 'auto', base: 'auto' } }
               
               src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              />

              <Stack   className="card_body" w={'100%'}>
               <CardBody>
                <Box mb={4} >
                <Heading
                 fontSize={{ lg: '32px', sm: '24px', base: '20px' }}
                 fontWeight={600}
                 lineHeight={{ lg: '36px', md: '34px', base: '30px' }}>
                 Event Title
                </Heading>
                <Text
                 pt={{ base: '10px', sm: '' }}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 fontWeight={500}>
                 Speaker : Rikesh Dai
                </Text>
                </Box>

                <Flex
                 direction={'column'}
                 gap={5}                 
                 fontSize={{ lg: '16px', sm: '14px', base: '14px' }}
                 fontWeight={400}
                 lineHeight={{ md: '24px', base: '18px' }}
                 py={5}>
                 <Flex gap={5}>
                  <MdLocationOn fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Text>Rikesh ko ghar ma</Text>
                 </Flex>
                 <Flex gap={5} alignItems={'center'}>
                  <MdOutlineDateRange fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Flex direction={'column'} gap={2}>
                   <Text>2022</Text>
                   <Text>10 baje</Text>
                  </Flex>
                 </Flex>
                </Flex>
               </CardBody>
               <CardFooter mt={4} gap={{ sm: 10, base: '20px' }} w={'100%'}>
                <Button
                 sx={{
                  '&:hover': {
                   background: 'linear-gradient(93deg, #2C84EC 12.34%, #000AE9 84.22%)'
                  }
                 }}
                 variant={'primary-button'}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 w={'50%'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}>
                 Register Now
                </Button>
                <Button
                 w={'50%'}
                 variant={'outlined-button'}
                 border={'3px solid blue'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 color={'white'}>
                 Read More
                </Button>
               </CardFooter>
              </Stack>
             </Card>
            </Box>
            </MotionBox>
         </TabPanel>

         <TabPanel  >
           <MotionBox 
        initial ={ {y:100} }
        animate= {{ y:0 }}
        transition={customeTranstion} 

        >
            <Box className="single_event_card" sx={FontCard} pb={10}>
             <Card
              direction={{ base: 'column', md: 'row' }}
              border={'2px solid #3A3A3A;'}
              p={{ xl: '48px 44px', lg: '44px 40px', md: '32px 28px', base: '28px 24px' }}
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
                backdropFilter:'blur(20px)',
                cursor: 'pointer',
                '&_button': {
                 background: 'red.300 ',
                 color: 'black'
                }
               }
              }}>
              <Image
               objectFit={'cover'}
               maxW={{ base: '100%', md: '315px' }}
               h={{ sm: '330px', md: 'auto', base: 'auto' } }
               
               src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              />

              <Stack   className="card_body" w={'100%'}>
               <CardBody>
                <Box mb={4} >
                <Heading
                 fontSize={{ lg: '32px', sm: '24px', base: '20px' }}
                 fontWeight={600}
                 lineHeight={{ lg: '36px', md: '34px', base: '30px' }}>
                 Event Title
                </Heading>
                <Text
                 pt={{ base: '10px', sm: '' }}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 fontWeight={500}>
                 Speaker : Rikesh Dai
                </Text>
                </Box>

                <Flex
                 direction={'column'}
                 gap={5}                 
                 fontSize={{ lg: '16px', sm: '14px', base: '14px' }}
                 fontWeight={400}
                 lineHeight={{ md: '24px', base: '18px' }}
                 py={5}>
                 <Flex gap={5}>
                  <MdLocationOn fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Text>Rikesh ko ghar ma</Text>
                 </Flex>
                 <Flex gap={5} alignItems={'center'}>
                  <MdOutlineDateRange fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Flex direction={'column'} gap={2}>
                   <Text>2022</Text>
                   <Text>10 baje</Text>
                  </Flex>
                 </Flex>
                </Flex>
               </CardBody>
               <CardFooter mt={4} gap={{ sm: 10, base: '20px' }} w={'100%'}>
                <Button
                 sx={{
                  '&:hover': {
                   background: 'linear-gradient(93deg, #2C84EC 12.34%, #000AE9 84.22%)'
                  }
                 }}
                 variant={'primary-button'}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 w={'50%'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}>
                 Register Now
                </Button>
                <Button
                 w={'50%'}
                 variant={'outlined-button'}
                 border={'3px solid blue'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 color={'white'}>
                 Read More
                </Button>
               </CardFooter>
              </Stack>
             </Card>
            </Box>
            </MotionBox>
         </TabPanel>

         <TabPanel  >
           <MotionBox 
        initial ={ {y:100} }
        animate= {{ y:0 }}
        transition={customeTranstion} 

        >
            <Box className="single_event_card" sx={FontCard} pb={10}>
             <Card
              direction={{ base: 'column', md: 'row' }}
              border={'2px solid #3A3A3A;'}
              p={{ xl: '48px 44px', lg: '44px 40px', md: '32px 28px', base: '28px 24px' }}
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
                backdropFilter:'blur(20px)',
                cursor: 'pointer',
                '&_button': {
                 background: 'red.300 ',
                 color: 'black'
                }
               }
              }}>
              <Image
               objectFit={'cover'}
               maxW={{ base: '100%', md: '315px' }}
               h={{ sm: '330px', md: 'auto', base: 'auto' } }
               
               src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              />

              <Stack   className="card_body" w={'100%'}>
               <CardBody>
                <Box mb={4} >
                <Heading
                 fontSize={{ lg: '32px', sm: '24px', base: '20px' }}
                 fontWeight={600}
                 lineHeight={{ lg: '36px', md: '34px', base: '30px' }}>
                 Event Title
                </Heading>
                <Text
                 pt={{ base: '10px', sm: '' }}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 fontWeight={500}>
                 Speaker : Rikesh Dai
                </Text>
                </Box>

                <Flex
                 direction={'column'}
                 gap={5}                 
                 fontSize={{ lg: '16px', sm: '14px', base: '14px' }}
                 fontWeight={400}
                 lineHeight={{ md: '24px', base: '18px' }}
                 py={5}>
                 <Flex gap={5}>
                  <MdLocationOn fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Text>Rikesh ko ghar ma</Text>
                 </Flex>
                 <Flex gap={5} alignItems={'center'}>
                  <MdOutlineDateRange fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Flex direction={'column'} gap={2}>
                   <Text>2022</Text>
                   <Text>10 baje</Text>
                  </Flex>
                 </Flex>
                </Flex>
               </CardBody>
               <CardFooter mt={4} gap={{ sm: 10, base: '20px' }} w={'100%'}>
                <Button
                 sx={{
                  '&:hover': {
                   background: 'linear-gradient(93deg, #2C84EC 12.34%, #000AE9 84.22%)'
                  }
                 }}
                 variant={'primary-button'}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 w={'50%'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}>
                 Register Now
                </Button>
                <Button
                 w={'50%'}
                 variant={'outlined-button'}
                 border={'3px solid blue'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 color={'white'}>
                 Read More
                </Button>
               </CardFooter>
              </Stack>
             </Card>
            </Box>
            </MotionBox>
         </TabPanel>
        
        
      </TabPanels>
     </Tabs>
    </Box>
   </Box>
  </>
 );
}

export default EventPage;
