import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {coronavirusKey} from '../../secret.js';
import Layout from '../components/layout';

const Coronavirus = () => {
  const [virusData, setVirusData] = useState([]);

  useEffect(() => {
    axios.get('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats', {
      "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": coronavirusKey
      }
    }).then(response => console.log(response))
  })

  return (
    <Layout>
      <h1>Current Coronavirus Data</h1>
    </Layout>
  )
}

export default Coronavirus;