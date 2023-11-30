import { Tr, Td, Image, Text, Flex, Center } from '@chakra-ui/react';



const ParticipantRow = ({item}) => {
  return (
      <Tr borderBottom={'1px solid #f2f2f2'} color={'gray.600'} fontSize={'0.99rem'}>
      <Td p={4} borderStyle={'solid'}>
        {item.participantName}
      </Td>
      <Td p={4}>
        <Text fontWeight={'bold'}>{item.participantEmail}</Text>
      </Td>
      <Td p={4}>{item.participantEvent}</Td>
      <Td p={4}>{item.participantPhone}</Td>
      <Td p={4}>{item.participantCollege}</Td>
      <Td p={4}>{item.eventSeat}</Td>
    </Tr>
  )
}

export default ParticipantRow
