import { Box, Table, Tbody, Tr, Td, Image as ChakraImage, Text } from '@chakra-ui/react';
import { useState } from 'react';
import TeamValoData from '../../../data/dataValoTeam.json';

interface ValorantTeam {
 name: string;
 logo: string; //url
}

const valorant_teams: ValorantTeam[] = TeamValoData.valorant_teams;

const TeamsTable = () => {
 const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

 const handleRowClick = (index: number) => {
  setSelectedRowIndex(index === selectedRowIndex ? null : index);
 };

 const teamsCount = valorant_teams.length;
 const teamsPerRow = 2;

 return (
  <Box paddingTop={'24px'}>
   <Table variant="simple" border={'1px solid blue'} p={{ base: '6px 12px', md: '12px 24px' }}>
    <Tbody>
     {[...Array(Math.ceil(teamsCount / teamsPerRow))].map((_, rowIndex) => (
      <Tr
       key={rowIndex}
       display="flex"
       flexDirection={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}
       justifyContent={{ md: 'space-between' }}
       alignSelf="stretch"
       background="rgba(0, 0, 0, 0.55)">
       {valorant_teams
        .slice(rowIndex * teamsPerRow, (rowIndex + 1) * teamsPerRow)
        .map((team, columnIndex) => (
         <Td
          key={columnIndex}
          onClick={() => handleRowClick(rowIndex * teamsPerRow + columnIndex)}
          display="flex"
          flexDirection="row"
          alignItems="center"
          padding={{ base: '14px 18px', md: '14px 18px' }}
          width={{ base: '100%', md: '600px', lg: '450px', xl: '660px' }}
          boxSizing="border-box"
          margin={{ base: '0 0 8px 0', md: '0' }}
          border={'2px solid #0055D5'}>
          <ChakraImage src={team.logo} alt={`${team.name} Logo`} boxSize="50px" />
          <Box width="4px" height="48px" bg="#0055D5" marginX="4" />
          <Text
           color="#FFF"
           fontFamily="heading"
           fontSize={{ base: '24px', md: '26px' }}
           fontStyle="normal"
           lineHeight="64px"
           fontWeight={'bold'}
           letterSpacing="-1.92px"
           textTransform="uppercase">
           {team.name}
          </Text>
         </Td>
        ))}
      </Tr>
     ))}
    </Tbody>
   </Table>
  </Box>
 );
};

export default TeamsTable;
