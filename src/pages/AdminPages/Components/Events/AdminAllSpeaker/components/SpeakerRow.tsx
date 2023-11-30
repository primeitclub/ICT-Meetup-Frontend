import { Tr, Td, Image, Text, Flex, Center } from '@chakra-ui/react';



const SpeakerRow = ({item}) => {
  return (
      <Tr borderBottom={'1px solid #f2f2f2'} color={'gray.600'} fontSize={'0.99rem'}>
      <Td p={4} borderStyle={'solid'}>
        {item.speakerName}
      </Td>
      <Td p={4}>
        <Text fontWeight={'bold'}>{item.speakerEvent}</Text>
      </Td>
    </Tr>
      
  )
}

export default SpeakerRow
