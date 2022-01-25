import React,{useState, useEffect} from 'react';
import axios from 'axios';
const Acapy = () => {

  const [connections, setconnections] = useState([]);
  useEffect(() => {
    const fetchconnections = async () => {
      //Update with your ACAPY_Controller IP address
      await axios.get(`http://34.201.33.137:3000/topic/connections`)
        .then(res => {
          const conns = res.data.results;
          setconnections(conns);
          console.log(connections);
        }).catch(error => {
        console.error(error);
      });
    }
    fetchconnections();
}, []);

  return ( 
<div></div>
  );
}

export default Acapy;

