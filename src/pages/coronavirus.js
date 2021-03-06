import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../components/layout';

import coronaStyles from './styles/coronavirus.module.scss';

const Coronavirus = () => {
  const [lastChecked, setLastChecked] = useState('');
  const [totalInfected, setTotalInfected] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [virusData, setVirusData] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    axios.get('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats', {
      "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": process.env.GATSBY_CORONAVIRUS_KEY
      }
    }).then(response => {
      const { lastChecked, covid19Stats } = response.data.data;
      const [infections, deaths] = getTotals(covid19Stats);

      setIsFetching(false);
      setHasFetched(true);

      displayDate(lastChecked);
      setVirusData(covid19Stats);
      setTotalInfected(infections);
      setTotalDeaths(deaths);
    })
  }, []);
  
  function getTotals(stats) {
    let infections = 0;
    let deaths = 0;
    stats.forEach(location => {
      infections += location.confirmed;
      deaths += location.deaths;
    });
    return [infections, deaths];
  }
  // TO DO:
  // sort results by confirmed
  // add location checker (change state / country / etc)
  // display totals

  function displayDate(date) {
    let dateString = new Date(date);
    setLastChecked(dateString.toLocaleString())
  }

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

  console.log('deaths:', totalDeaths, 'infections: ', totalInfected);
  console.log('isFetching: ', isFetching);
  console.log('hasFetched: ', hasFetched);

  return !isFetching
    && hasFetched
      ? (
      <Layout>
          <h2>Utah coronavirus totals as of: <span className={coronaStyles.dataEmphasis}>{lastChecked}</span></h2>
          <h3>World Infections: <span className={coronaStyles.dataEmphasis}>{totalInfected}</span> || World Deaths: <span className={coronaStyles.dataEmphasis}>{totalDeaths}</span></h3>
          <div className={coronaStyles.infectionGrid}>
            {locationData}
          </div>
        </Layout>
      )
      : null
}

export default Coronavirus;