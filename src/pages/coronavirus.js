import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import {coronavirusKey} from '../../secret.js';
import Layout from '../components/layout';

const Coronavirus = () => {
  const [lastChecked, setLastChecked] = useState('');
  const [totalInfected, setTotalInfected] = useState(0);
  const [virusData, setVirusData] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    axios.get('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats', {
      "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": process.env.GATSBY_CORONAVIRUS_KEY
      }
    }).then(response => {
      const { lastChecked, covid19Stats } = response.data.data;
      displayDate(lastChecked);
      setVirusData(covid19Stats);
      setHasFetched(true);
    })
  }, []);

  console.log('virus data: ', virusData);

  function displayDate(date) {
    let dateString = new Date(date);
    setLastChecked(dateString.toLocaleString())
  }

  function displayTotals(infected, deaths) {
    return <h3>Total Infected: {infected} || Total Deaths: {deaths}</h3>
  }

  const locationData = virusData.map(location => {
    let infected = 0;
    let deaths = 0;
    if (location.country === "US" && location.province === "Utah") {
      if (location.confirmed !== 0) {
        return (
          <ul key={location.keyId}>
            <li><strong>City:</strong> {location.city}</li>
            <li><strong>Infected:</strong> {location.confirmed}</li>
            <li><strong>Deaths:</strong> {location.deaths}</li>
          </ul>
        )
      }
    }
  })

  return (
    <Layout>
      <h1>Coronavirus as of: {lastChecked}</h1>
        {
          hasFetched ? 
            locationData 
              : 
            null
        }
    </Layout>
  )
}

export default Coronavirus;