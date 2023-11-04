import PageTitle from "../../components/Global/PageTitle"
import SliderGroup from "./Components/SliderGroup"
import TeamData from '../../data/dataTeam.json'
import { Box } from "@chakra-ui/layout"
import TeamHeader from "./Components/TeamHeader"

function Team(){


    console.log( TeamData );

    const team_developer = TeamData.developer_team;
    const team_organizer = TeamData.organizer_team;
    const team_volunter = TeamData.volunteer_team;

    return (<>
    
    <PageTitle pageTitle="Teams" pageDescription="Find out what’s happening when" />



    <Box className="team_wrap" w={ {lg:'85%',sm:'90%',base:'100%'} } m={'auto'}  >


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

    </Box>

    </>)

}

export default Team