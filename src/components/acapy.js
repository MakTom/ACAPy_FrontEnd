import React, {useState, useEffect} from "react";
import axios from 'axios';

const Acapy = () => {

    const [connections, setconnections] = useState([]);

    useEffect(() =>{
        axios.get(`http://34.224.165.20:3000/topic/connections`)
        .then(res => {
            const conns = res.data.results;
            setconnections(conns);
        }).catch(error => {
            console.error(error);
        });
    }, []); 

    return ( 
            <ul>
              {
                {connections}
                  .map(connection =>
                    <li key={connection.connection_id}>{`id: ${connection.connection_id}, rfc23_state: ${connection.rfc23_state}`}</li>
                  )
              }
            </ul>
    );
}

export default Acapy;