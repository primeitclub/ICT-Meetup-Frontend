import React from 'react';
import { Box } from '@chakra-ui/react';
import TeamHeader from './teamHeader';
import TeamMembers from './teamMembers';
import MyTeamValoData from '../../../data/dataValoMyTeam.json';

interface ValorantTeam {
 name: string;
 lead: boolean;
 photo: string; // url
}

const MyTeam: React.FC = () => {
 const { teamLogo, teamName, my_team } = MyTeamValoData;

 return (
  <Box display={'flex'} flexDirection={'column'} gap="24px" padding={'32px 24px'}>
   <TeamHeader teamLogo={teamLogo} teamName={teamName} />

   <Box display={'flex'} flexDirection={'row'}>
    {my_team.map((teamMember: ValorantTeam) => (
     <TeamMembers key={teamMember.name} {...teamMember} />
    ))}
   </Box>
  </Box>
 );
};

export default MyTeam;
