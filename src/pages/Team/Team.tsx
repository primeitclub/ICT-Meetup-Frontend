import PageTitle from "../../components/Global/PageTitle"
import SliderGroup from "./Components/SliderGroup"
import TeamData from '../../data/dataTeam.json'
import TeamInsertData from '../../data/datainsertTeam.json'
import { Box } from "@chakra-ui/layout"
import TeamHeader from "./Components/TeamHeader"
import { useEffect, useState } from "react"
import axios from "axios"
import { DataTypeTeam } from "./DataSchema/Data"
import { GetRequest } from "../../services/httpRequest"
import CommingSoon from "../../components/ui/CommingSoon"
import { addDataFromJsonFile, getTeamsGroupedByType } from "../../services/firebaseRequest"

enum TeamCategory {
    organizer = "organizer",
    volunteer = "volunteer",
    developer = "developer"
}

interface dataTeamProp {

    groupedTeamMembers: DataTypeTeam[];

}

function Team() {

    const [dataTeam, setDataTeam] = useState<any>([]);

    useEffect(() => {
        const teamData = async () => {
            try {
                // const dataTeam = await GetRequest("team-members");
                // setDataTeam(dataTeam.data.groupedTeamMembers);
                // console.log(dataTeam.data.groupedTeamMembers)
                console.log("team data");
                const dataTeam = await getTeamsGroupedByType();
                console.log(dataTeam);
                setDataTeam(dataTeam);
                return dataTeam;
            } catch (err) {
                console.log(err);
            }
        };

        teamData();
    }, []);



    const team_developer = dataTeam?.developer;
    const team_organizer = dataTeam?.organizer;
    const team_volunter = dataTeam?.volunteer;


    return (<>

        <PageTitle pageTitle="Teams" pageDescription="The Dedicated Team Behind Making this Event Possible." />

        {/* <CommingSoon /> */}


        <Box className="team_wrap" w={{ lg: '85%', sm: '90%', base: '100%' }} m={'auto'}  >


            <Box className="team_category" pb={'80px'} >
                <TeamHeader headerTitle='OrganizeR Team' headerDescription='Architects of Vision' />
                <SliderGroup TeamData={team_organizer} />
            </Box>

            <Box className="team_category" pb={'80px'} >
                <TeamHeader headerTitle='Volunteer' headerDescription='Executors of Passion' />
                <SliderGroup TeamData={team_volunter} />
            </Box>

            <Box className="team_category" pb={'80px'} >
                <TeamHeader headerTitle='Development Team' headerDescription='Builders of Innovation.' />
                <SliderGroup TeamData={team_developer} />
            </Box>

        </Box>

    </>)

}

export default Team
