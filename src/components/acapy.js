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
            console.log("Cons: "+conns);
            setconnections(conns);
            console.log(connections);
        })
        .catch(error => {
            console.error(error);
        });   
    }, []);

  return ( 
        <div>
        { isloading && <div>..Loading...</div>}
    
        {connections.map(connection => (
              <li key={connection.connection_id}>{`id: ${connection.connection_id}, rfc23_state: ${connection.rfc23_state}`}</li>
            ))
        }
    
   
        </div>
  );
}

export default Acapy;

