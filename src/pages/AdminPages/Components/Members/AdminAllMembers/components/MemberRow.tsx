import { Tr, Td, Image, Flex, Center } from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const MemberRow = ({ item }) => {
 return (
  <Tr borderBottom={'1px solid #f2f2f2'} color={'gray.600'} fontSize={'0.99rem'}> 
   <Td p={4} borderStyle={'solid'}>
    <Flex alignContent={'center'} gap={'15px'}>
     <Image borderRadius="full" src={item.memberImg} w={'12'} h={'12'} objectFit={'cover'}/>
     <Center fontWeight={'bold'}>{item.memberName}</Center>
    </Flex>
   </Td>
   <Td p={4} fontWeight={'medium'} fontSize={'0.92rem'}>{item.memberEmail}</Td>
   <Td p={4} >{item.memberVolunteer}</Td>
   <Td p={4}>{item.memberDesignation}</Td>
   <Td p={4} fontWeight={'600'}>{item.memberBatch}</Td>
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

export default MemberRow;
