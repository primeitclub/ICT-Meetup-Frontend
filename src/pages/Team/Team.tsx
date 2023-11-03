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



    <Box className="team_wrap" w={'90%'} m={'auto'}  >


    <TeamHeader headerTitle = 'OrganizeR Team' headerDescription= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
    <SliderGroup TeamData = {team_organizer}  />

    <TeamHeader headerTitle = 'OrganizeR Team' headerDescription= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
    <SliderGroup TeamData={ team_volunter } />

    <TeamHeader headerTitle = 'OrganizeR Team' headerDescription= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
    <SliderGroup TeamData={ team_developer } />

    </Box>

    </>)

}

export default Team