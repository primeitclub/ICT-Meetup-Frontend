import { Table, TableContainer } from '@chakra-ui/react';
export const tableStyle = {
  //  background: '#f2f2f2',
 
  textTransform: 'capitalize'
 };
const GenericTable = ({ children }) => (
  <TableContainer mt={'1rem'} borderRadius={'7px'} border={'1px solid #f2f2f2'} boxShadow="xs">
    <Table w={'100%'} sx={tableStyle}>
      {children}
    </Table>
  </TableContainer>
);

export default GenericTable;