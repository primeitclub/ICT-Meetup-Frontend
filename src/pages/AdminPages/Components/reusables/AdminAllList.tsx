import React from 'react';
import { Container, Flex, Heading, Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Thead, Tbody, Tr, Th,ButtonProps } from '@chakra-ui/react';
import GenericTable from './GenericTable';
import MemberRow from '../Members/AdminAllMembers/components/MemberRow';
import { useState } from 'react';
import {
  Previous,
  Paginator,
  PageGroup,
  Page,
  Next,
  generatePages
} from 'chakra-paginator';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

const AdminAllList = ({ dataList, title, addLink, tableHeaders, RowComponent }) => {
  const isMemberList = RowComponent === MemberRow;
  console.log(dataList)
  const itemsPerPage = 10;
  const totalPages = Math.ceil(dataList.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataList.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems)
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const normalStyles : ButtonProps= {
    borderRadius:'4px',
    _hover: {
      bg: "blue.100"
    },
  };

  const activeStyles : ButtonProps= {
    borderRadius:'4px',
    bg: 'blue.300'
  };
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
        <Thead textTransform={'uppercase'} fontSize={'0.75rem'} lineHeight={'1rem'} textAlign={'left'}>
          <Tr opacity={'0.6'}>
            {tableHeaders.map((header, index) => (
              <Th key={index} px={'4'} py={'3'}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody backgroundColor={'#fff'}>
          {currentItems.map((item, index) => (
            <RowComponent key={index} item={item} />
          ))}
        </Tbody>
      </GenericTable>

      {isMemberList && (
        <Stack direction="row" spacing={2} mt={4} justifyContent="center" color={'gray.600'}>
          <Paginator
            pagesQuantity={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange} normalStyles={normalStyles} activeStyles={activeStyles}
          >
            <Previous >
              <CgChevronLeft />
            </Previous>
            <PageGroup  align="center">
              {generatePages(totalPages, currentPage).map((page, index) => (
                <Page key={index} page={page} />
              ))}
            </PageGroup>
            <Next>
              <CgChevronRight />
            </Next>
          </Paginator>
        </Stack>
      )}
    </Container>
  );
};

export default AdminAllList;
