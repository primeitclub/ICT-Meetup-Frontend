import { Box ,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MainAdmin() {
    
    return ( <>
    
      <Box color={'white'} minH={'100vh'}>
            this is the DASHBOARD 

            <Link to={'/adminn/gallery'} ><Text color={'white'} >CLICK HERE</Text></Link>

      </Box>

    </> );
}

export default MainAdmin;