import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import MyTeamValoData from '../../../data/dataValoMyTeam.json';

interface ValorantTeam {
 name: string;
 lead: boolean;
 photo: string; // url
}

const MyTeam: React.FC = () => {
 const my_team: ValorantTeam[] = MyTeamValoData.my_team;

 return (
  <Box display={'flex'} flexDirection={'column'} gap="24px" padding={'32px 24px'}>
   <Flex justifyContent={'center'}>
    <Box
     display="flex"
     border={'3px solid blue'}
     flexDirection={'row'}
     padding={'10px 20px'}
     width={{ base: '100%', md: '400px', lg: '450px', xl: '400px' }}
     boxSizing="border-box"
     alignItems={'center'}>
     <Image src={MyTeamValoData.teamLogo} alt="Team Logo" boxSize="50px" />
     <Box width="4px" height="48px" bg="#0055D5" marginX="4" />
     <Text
      color="#FFF"
      fontFamily="heading"
      fontSize={'28px'}
      fontWeight={'bold'}
      letterSpacing="-2.92px"
      textTransform="uppercase">
      {MyTeamValoData.teamName}
     </Text>
    </Box>
   </Flex>

   <Box display={'flex'} flexDirection={'row'}>
    {my_team.map((teamMember) => (
     <Box
      key={teamMember.name}
      position="relative"
      overflow="hidden"
      width={teamMember.lead ? '30%' : '20%'}>
      <Image
       src={teamMember.photo}
       alt={`${teamMember.name}'s Photo`}
       flex="1 0 0"
       height="364px"
       width={'100%'}
       style={{ objectFit: 'cover' }}
      />
      <Box
       position="absolute"
       bottom="0"
       left="0"
       p="2"
       height="364px"
       width={'100%'}
       background="linear-gradient(180deg, rgba(168, 210, 240, 0.00) 0%, rgba(25, 35, 122, 0.00) 60.83%, rgba(9, 38, 142, 0.80) 84.27%)"
       color="white"
       textAlign="left"
       display="flex"
       flexDirection="column"
       justifyContent={'flex-end'}>
       {teamMember.lead && (
        <Text
         color="#FFF"
         fontFamily="body"
         fontSize="24px"
         fontStyle="normal"
         fontWeight="bold"
         lineHeight="22px">
         Captain
        </Text>
       )}
       <Text
        color="#FFF"
        fontFamily="body"
        fontSize="18px"
        fontStyle="normal"
        fontWeight={400}
        lineHeight="22px">
        {teamMember.name}
       </Text>
      </Box>
     </Box>
    ))}
   </Box>
  </Box>
 );
};

export default MyTeam;
