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
 Flex
} from '@chakra-ui/react';
import PageTitle from '../../components/Global/PageTitle';
import { MdLocationOn, MdOutlineDateRange } from 'react-icons/md';
import { VariableObject } from './Data.tsx';

function EventPage() {
 const FontCard = {
  fontFamily: 'Nunito Sans',
  color: '#FFF',
  fontStyle: 'normal'
 };

 // define data type
 interface ObjectDataType {
  [key: string]: {
   event_title: string;
   event_speaker: string;
   date: string;
   time: string;
   location: string;
   image:string
  }[];
 }

 // data variable
 const workShop: ObjectDataType = VariableObject;

 {
  Object.keys(workShop).map((item) => {
   const dataVariblee = workShop[item];

   console.log(item + ':' + dataVariblee);

   dataVariblee.map((data) => {
    console.log(data.event_title);
   });

   return <h1>Heading 1</h1>;
  });
 }
 return (
  <>
   <Box height={'100%'} color={'white'}>
    <PageTitle pageTitle="Event" pageDescription="Find out what’s happening when" />

    {/* tab content begins */}

    <Box width={{ base: '100%', xl: '80%' }} margin={'auto'} className="tabWraper">
     <Tabs>
      <TabList
       whiteSpace={'nowrap'}
       display={'flex'}
       flexWrap={'wrap'}
       justifyContent={'space-around'}
       gap={{ sm: '', base: '20px' }}>
        {/* mapping through Object main keys ( workshop , session , esport ) */}
       {Object.keys(workShop).map((item) => (
        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
         {item}
        </Tab>
       ))}
      </TabList>

      <TabPanels mt={'69px'}>
        {/* mapping again for single event detail  */}
       {Object.keys(workShop).map((dataIndex) => {
        const DataVariable = workShop[dataIndex];

        return (
         <TabPanel>
          {DataVariable.map((items) => {
           return (
            <Box className="single_event_card" sx={FontCard} pb={10}>
             <Card
              direction={{ base: 'column', md: 'row' }}
              border={'2px solid #3A3A3A;'}
              p={{ xl: '48px 44px', lg: '44px 40px', md: '32px 28px', base: '28px 24px' }}
              borderRadius={8}
              gap={{ lg: '48px', md: '30px', base: '24px' }}
              sx={{
               '&:hover': {
                background:
                 'linear-gradient(97deg, rgba(11, 41, 120, 0.60) -1.24%, rgba(0, 0, 0, 0.00) 100%)',
                border: '2px solid #13448E;',
                cursor: 'pointer',
                '&_button': {
                 background: 'red.300',
                 color: 'black'
                }
               }
              }}>
              <Image
               objectFit={'cover'}
               maxW={{ base: '100%', md: '315px' }}
               h={{ sm: '330px', md: 'auto', base: 'auto' } }
               
               src={ items.image }
              />

              <Stack className="card_body" w={'100%'}>
               <CardBody>
                <Heading
                 fontSize={{ lg: '24px', sm: '20px', base: '20px' }}
                 fontWeight={600}
                 lineHeight={{ lg: '36px', md: '34px', base: '30px' }}>
                 {items.event_title}
                </Heading>
                <Text
                 pt={{ base: '10px', sm: '' }}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 fontWeight={600}>
                 Speaker : {items.event_speaker}
                </Text>
                <Flex
                 direction={'column'}
                 gap={5}
                 fontSize={{ lg: '16px', sm: '14px', base: '14px' }}
                 fontWeight={400}
                 lineHeight={{ md: '24px', base: '18px' }}
                 py={5}>
                 <Flex gap={5}>
                  <MdLocationOn fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Text>{items.location}</Text>
                 </Flex>
                 <Flex gap={5} alignItems={'center'}>
                  <MdOutlineDateRange fill="white" style={{ color: 'white', fontSize: 24 }} />
                  <Flex direction={'column'} gap={2}>
                   <Text>{items.date}</Text>
                   <Text>{items.time}</Text>
                  </Flex>
                 </Flex>
                </Flex>
               </CardBody>
               <CardFooter gap={{ sm: 10, base: '20px' }} w={'100%'}>
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
           );
          })}
         </TabPanel>
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
