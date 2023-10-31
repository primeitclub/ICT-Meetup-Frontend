import PageTitle from "../../components/Global/PageTitle"
import SliderGroup from "./Components/SliderGroup"
import TeamData from '../../data/dataTeam.json'
import { Box } from "@chakra-ui/layout"

function Team(){

    return (<>
    
    <PageTitle pageTitle="Teams" pageDescription="Find out what’s happening when" />



    <Box className="team_wrap" h={'100vh'} >
    <SliderGroup/>
    </Box>

    </>)

}

export default Team