import dataJson from './Data/allEventData.json';
import {
 Table,
 Thead,
 Tbody,
 Tr,
 Th,
 Td,
 Text,
 Box,
 Heading
} from '@chakra-ui/react';

interface EventData {
 eventTitle: string;
 eventCategory: string;
 eventSpeaker: string;
 eventDate: string;
 eventTime: string;
 eventStatus: string;
}

// style table head
export const tableStyle = {
 background: 'white',
 textTransform: 'capitalize'
};

function AdminAllEvent() {
 let allEventData: EventData[] = dataJson;

 console.log(allEventData);

 return (
  <>

        <Box>
            <Heading as={'h1'}   >ALL EVENTS</Heading>
        </Box>

   <Table sx={tableStyle}>
    <Thead>
     <Tr>
      <Th py={4} bg={'slate.400'} px={8}>
       TITLE
      </Th>
      <Th py={4} bg={'slate.400'} px={8}>
       CATEGORY
      </Th>
      <Th py={4} bg={'slate.400'} px={8}>
       SPEAKERS
      </Th>
      <Th py={4} bg={'slate.400'} px={8}>
       DATE
      </Th>
      <Th py={4} bg={'slate.400'} px={8}>
       TIME
      </Th>
      <Th py={4} bg={'slate.400'} px={8}>
       STATUS
      </Th>
      <Th py={4} bg={'slate.400'} px={8}>
       Action
      </Th>
     </Tr>
    </Thead>
    <Tbody>
     {allEventData.map((item) => (
      <Tr>
       <Td p={4} >{item.eventTitle}</Td>
       <Td p={4} ><Text fontWeight={'bold'} >{item.eventCategory}</Text></Td>
       <Td p={4} >{item.eventSpeaker}</Td>
       <Td p={4} >{item.eventDate}</Td>
       <Td p={4} >{item.eventStatus}</Td>
       <Td p={4} >Complete</Td>
      </Tr>
     ))}
    </Tbody>
   </Table>
  </>
 );
}

export default AdminAllEvent;
