import { Container, Flex, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Thead, Tbody, Tr, Th } from '@chakra-ui/react';
import GenericTable from './GenericTable';
import EventRow from '../Events/AdminAddEvent/components/EventRow';

const AdminAllList = ({ dataList, title, addLink, tableHeaders }) => {
  return (
    <Container maxWidth={'container.lg'} mx={'auto'}>
      <Flex justifyContent={'space-between'}>
        <Heading as="b" fontSize={'xl'} fontWeight={'900'} textTransform={'uppercase'}>
          {title}
        </Heading>
        <Button size={'md'} bg={'#2563EB'} color={'#fff'} py={2} px={4} borderRadius={'0.375rem'}>
          <Link to={addLink}>Add New {title.substring(4, title.length - 1)}</Link>
        </Button>
      </Flex>
      <GenericTable>
        <Thead textTransform={'uppercase'}>
          <Tr opacity={'0.6'}>
            {tableHeaders.map((header, index) => (
              <Th key={index} px={'4'} py={'3'}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody backgroundColor={'#fff'}>
          {dataList.map((item, index) => (
            <EventRow key={index} item={item} />
          ))}
        </Tbody>
      </GenericTable>
    </Container>
  );
};

export default AdminAllList;
