import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

interface TeamMemberProps {
 name: string;
 lead: boolean;
 photo: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, lead, photo }) => (
 <Box position="relative" overflow="hidden" width={lead ? '30%' : '20%'}>
  <Image
   src={photo}
   alt={`${name}'s Photo`}
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
   {lead && (
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
    {name}
   </Text>
  </Box>
 </Box>
);

export default TeamMember;
