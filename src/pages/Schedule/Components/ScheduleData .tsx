import { TabPanel, Box, Image, Stack, Heading, Text, Flex } from '@chakra-ui/react';
import { DataSchedule } from './DataScheme/DataScheme';
import { useState } from 'react';
import { ProgramType } from './DataScheme/DataScheme';


interface DataProps {
    dataScheduleDate: DataSchedule[];
}

function ScheduleData ( { dataScheduleDate }: DataProps) {


 return (
  <>
   <TabPanel
    pt={'48px'}
    display={'flex'}
    flexDirection={'column'}
    gap={'24px'}
    className="time_event_wrap">
    {/* <BreakEvent /> */}

    {dataScheduleDate.map((item: any) => (
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
           <Text borderRadius={'4px'} h={'fit-content'} bg={ProgramType[item.ProgramType as keyof typeof ProgramType]} p={'5px 12px'}>
            { item.ProgramType}
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

         {item.EventType === 'Event' ? <Text> Room : {item.EventRoom}</Text> : null}
        </Flex>
       </Box>
      </Flex>
     </Box>
    ))}
   </TabPanel>
  </>
 );
}
 
export default ScheduleData ;
