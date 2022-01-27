import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Acapy = () => {
    const [connections, setconnections] = useState([]);
    const [isloading,setisloading] = useState(true);
    useEffect(() => {
      //Update with your ACAPY_Controller IP address
        axios.get(`http://34.201.33.137:3000/topic/connections`)
        .then(res => {
            const conns = res.data.results;
            setconnections(conns);
            setisloading(false);
        })
        .catch(error => {
            console.error(error);
        });   
    }, []);

    const acceptrequest = (connection_id) =>{
        //Update with your ACAPY_Controller IP address
        axios.post(`http://34.201.33.137:3000/topic/connections/acceptrequest`, {"connection_id": connection_id})
        .then(res => {
          const connections = res.data.results;
          console.log(connections);
        })
        .catch(error => {
          console.error(error);
        })
      }

  return ( 
        <div>
            { isloading && <div>..Loading...</div>}
            {connections.map(connection => (
                <li key={connection.connection_id}>
                    {`ID: ${connection.connection_id}`}
                    {` State: ${connection.rfc23_state}`}

                    {
                        connection.rfc23_state==="request-received" && <button onClick={() => acceptrequest(connection.connection_id)}>Accept</button>
                    }
                </li>
                ))
            }
        </div>
  );
}

export default Acapy;

