import { Tr, Td, Text, Flex } from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const EventRow = ({ item }) => {
  
  return (
    <Tr borderBottom={'1px solid #f2f2f2'} color={'gray.600'} fontSize={'0.99rem'}>
      <Td p={4} borderStyle={'solid'}>
        {item.eventTitle}
      </Td>
      <Td p={4}>
        <Text fontWeight={'bold'}>{item.eventCategory}</Text>
      </Td>
      <Td p={4}>{item.eventSpeaker}</Td>
      <Td p={4}>{item.eventDate}</Td>
      <Td p={4}>{item.eventTime}</Td>
      <Td p={4}>{item.eventSeat}</Td>
      <Td p={4}>
        <Flex fontSize={'22px'} justifyContent={'space-around'}>
          <Link to='/'>
            <AiOutlineEdit />
          </Link>
          <Link to='/'>
            <MdDeleteOutline />
          </Link>
        </Flex>
      </Td>
    </Tr>
  );
};

export default EventRow;
