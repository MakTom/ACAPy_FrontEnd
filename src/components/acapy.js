import React from 'react';
import axios from 'axios';

export default class Acapy extends React.Component {
  state = {
    connections: []
  }

  componentDidMount() {
    axios.get(`http://34.201.33.137:3000/topic/connections`)
      .then(res => {
        const connections = res.data.results;
        this.setState({ connections });
        console.log(connections);
      }).catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div></div>
    )
  }
}