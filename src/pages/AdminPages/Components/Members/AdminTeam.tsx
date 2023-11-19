import { useParams } from "react-router-dom";

function TeamAdmin() {

    const {dashboard } = useParams<any>();

    

    return ( <>
    
            THIS IS SINGLE PAGE OF  { dashboard };

    </> );
}

export default TeamAdmin;