import { useParams } from "react-router-dom";

function AdminTeam() {

    const {dashboard } = useParams<any>();

    

    return ( <>
    
            THIS IS SINGLE PAGE OF  { dashboard };

    </> );
}

export default AdminTeam;