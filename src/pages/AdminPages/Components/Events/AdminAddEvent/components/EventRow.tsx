import { Tr, Td, Text, Flex } from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const EventRow = ({ item }) => {
  const statusStyles = {
    Completed: {
      px: 2,
      py: 1,
      fontWeight: 'semibold',
      bg: 'green.100',
      color: 'green.400',
      borderRadius: '8px',
      textAlign: 'center',
    },
    Upcoming: {
      px: 2,
      py: 1,
      fontWeight: 'semibold',
      bg: 'blue.100',
      color: 'blue.400',
      borderRadius: '8px',
      textAlign: 'center',
    },
    Scheduled: {
      px: 2,
      py: 1,
      fontWeight: 'semibold',
      bg: 'yellow.100',
      color: 'yellow.400',
      borderRadius: '8px',
      textAlign: 'center',
    },
    Cancelled: {
      px: 2,
      py: 1,
      fontWeight: 'semibold',
      bg: 'red.100',
      color: 'red.400',
      borderRadius: '8px',
      textAlign: 'center',
    },
  };

  const statusStyle = statusStyles[item.eventStatus] || {};

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
        <Text sx={{ ...statusStyle }}>{item.eventStatus}</Text>
      </Td>
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
