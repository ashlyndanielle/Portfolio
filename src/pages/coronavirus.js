import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../components/layout';

import coronaStyles from './styles/coronavirus.module.css';

const Coronavirus = () => {
  const [lastChecked, setLastChecked] = useState('');
  // const [totalInfected, setTotalInfected] = useState(0);
  // const [totalDeaths, setTotalDeaths] = useState(0);
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
  
  // function setTotals(stats) {
  //   let infections = 0;
  //   let deaths = 0;
  //   stats.forEach(location => {
  //     infections += location.confirmed;
  //     deaths += location.deaths;
  //   });
  //   setTotalInfected(infections);
  //   setTotalDeaths(deaths);
  //   console.log('deaths:', totalDeaths, 'infections: ', totalInfected);
  // }
  // TO DO:
  // sort results by confirmed
  // add location checker (change state / country / etc)
  // display totals

  function displayDate(date) {
    let dateString = new Date(date);
    setLastChecked(dateString.toLocaleString())
  }

  // function displayTotals(infected, deaths) {
  //   return <h3>Total Infected: {infected} || Total Deaths: {deaths}</h3>
  // }

  const locationData = virusData
    .filter(location => {
      return (location.country === "US" && location.province === "Utah" && location.confirmed !==0)
    }).sort((a, b) => b.confirmed - a.confirmed).map(location => {
      return (
        <ul key={location.keyId}>
          <li><strong>County:</strong> {location.city}</li>
          <li><strong>Infected:</strong> {location.confirmed}</li>
          <li><strong>Deaths:</strong> {location.deaths}</li>
        </ul>
      )
    })

  return (
    <Layout>
      <h2>Utah coronavirus totals as of: <span className={coronaStyles.displayDate}>{lastChecked}</span></h2>
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