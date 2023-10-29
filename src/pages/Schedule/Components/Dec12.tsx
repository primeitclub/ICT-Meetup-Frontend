import { TabPanel, Box, Image, Stack, Button, Heading, Text, Flex } from '@chakra-ui/react';
import { DataSchedule } from './DataScheme/DataScheme';
import { ProgramType } from './DataScheme/DataScheme';

interface Data12prop {
 data12: DataSchedule[];
}


function Dec12({ data12 }: Data12prop) {


 return (
  <>

   <TabPanel
    pt={'48px'}
    display={'flex'}
    flexDirection={'column'}
    gap={'24px'}
    className="time_event_wrap">
    {/* <BreakEvent /> */}

    {Object.keys(data12).map((item: any) => (


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
       {data12[item].EventType === 'Event' ? (
        <Box
         // here
         w={{ lg: '20%', md: '30%', sm: '40%', base: '100%' }}
         //  change in here
         h={{ base: '150px', sm: '125px' }}
         className="event_image">
         <Image src={data12[item].EventImage} h={'100%'} w={'100%'} objectFit={'cover'} />
        </Box>
       ) : null}

       <Box w={{ lg: '80%', md: '70%', sm: '60%', base: '100%' }} className="event_detail">
        <Flex w={'100%'} justifyContent={'space-between'} className="Headings">
         <Stack>
          <Heading fontWeight={600} fontSize={{ lg: '24px', sm: '20px', base: '20px' }} as={'h4'}>
           {data12[item].EventName}
          </Heading>
          <Heading
           as={'h5'}
           color={'#26A0F9'}
           fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
           fontWeight={400}
           lineHeight={'140%'}
           letterSpacing={'0.4px'}>
           {data12[item].EventTimeStart} - {data12[item].EventTimeEnd}
          </Heading>
         </Stack>
         <Box>
          {data12[item].EventType === 'Event' ? (
           <Text borderRadius={'4px'} h={'fit-content'} bg={'#A40A0A'} p={'5px 12px'}>
            Event { data12[item].ProgramType  }
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
         <Text>{data12[item].EventAuthor}</Text>

         {data12[item].EventType === 'Event' ? <Text>Room : {data12[item].EventRoom}</Text> : null}
        </Flex>
       </Box>
      </Flex>
     </Box>
    ))}
   </TabPanel>
  </>
 );
}

export default Dec12;
