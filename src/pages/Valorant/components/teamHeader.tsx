import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

interface TeamHeaderProps {
 teamLogo: string;
 teamName: string;
}

const TeamHeader: React.FC<TeamHeaderProps> = ({ teamLogo, teamName }) => (
 <Flex justifyContent={'center'}>
  <Box
   display="flex"
   border={'3px solid blue'}
   flexDirection={'row'}
   padding={'10px 20px'}
   width={{ base: '100%', md: '400px', lg: '450px', xl: '400px' }}
   boxSizing="border-box"
   alignItems={'center'}>
   <Image src={teamLogo} alt="Team Logo" boxSize="50px" />
   <Box width="4px" height="48px" bg="#0055D5" marginX="4" />
   <Text
    color="#FFF"
    fontFamily="heading"
    fontSize={'28px'}
    fontWeight={'bold'}
    letterSpacing="-2.92px"
    textTransform="uppercase">
    {teamName}
   </Text>
  </Box>
 </Flex>
);

export default TeamHeader;
