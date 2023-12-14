import PageTitle from "../../components/Global/PageTitle"
import SliderGroup from "./Components/SliderGroup"
import TeamData from '../../data/dataTeam.json'
import { Box } from "@chakra-ui/layout"
import TeamHeader from "./Components/TeamHeader"
import { useEffect, useState } from "react"
import axios from "axios"
import { DataTypeTeam } from "./DataSchema/Data"
import { GetRequest } from "../../services/httpRequest"
import CommingSoon from "../../components/ui/CommingSoon"

enum TeamCategory {
    organizer = "organizer",
    volunteer = "volunteer",
    developer = "developer"
}

    interface dataTeamProp {
        
        groupedTeamMembers: DataTypeTeam[];
    
    }

function Team(){    

    const [dataTeam, setDataTeam] = useState<any>();

    useEffect(() => {
      const teamData = async () => {
        try {
          const dataTeam = await GetRequest("team-members");
          setDataTeam(dataTeam.data.groupedTeamMembers);
          console.log(dataTeam.data.groupedTeamMembers)
          return dataTeam.data;
        } catch (err) {
          console.log(err);
        }
      };
  
      teamData();
    }, []);    



    const team_developer = dataTeam?.development;
    const team_organizer =dataTeam?.organizer;
    const team_volunter =dataTeam?.volunteer;


    return (<>

        <PageTitle pageTitle="Teams" pageDescription="Find out what’s happening when" />

        <CommingSoon />


        {/* <Box className="team_wrap" w={ {lg:'85%',sm:'90%',base:'100%'} } m={'auto'}  >


    <Box className="team_category" pb={'80px'} >
    <TeamHeader headerTitle = 'OrganizeR Team' headerDescription= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.dasdas sdadsa asd  ' />
    <SliderGroup TeamData = {team_organizer}  />
    </Box>

   <Box className="team_category" pb={'80px'} >
   <TeamHeader headerTitle = 'Volunteer' headerDescription= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
    <SliderGroup TeamData={ team_volunter } />
   </Box>

    <Box className="team_category" pb={'80px'} >
    <TeamHeader headerTitle = 'Development Team' headerDescription= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
    <SliderGroup TeamData={ team_developer } />
    </Box>

    </Box> */}

    </>)

}

export default Team
