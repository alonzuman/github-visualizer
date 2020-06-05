import React, { useEffect, useState } from 'react';
import GhPolyglot from 'gh-polyglot';
import { Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

export default function DoughnutGraph() {
  const { username } = useParams();
  const [languages, setLanguages] = useState([]);

  let labels = [];
  let dataSetsData = [];
  let languageColors = [];

  const fetchLanguages = async () => {
    const me = await new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.log(err)
      }
      setLanguages(stats);
    });
  };

  const mapLanguages = (languages) => {
    console.log(languages)
    languages.map(language => {

      labels.push(language.label);
      dataSetsData.push(language.value);
      languageColors.push(language.color)
    })
  }

  useEffect(() => {
    fetchLanguages();
    mapLanguages(languages)
    console.log(languages)
  }, [])

  const data = {
    labels: labels,
    datasets: [{
      data: dataSetsData,
      backgroundColor: languageColors,
      hoverBackgroundColor: languageColors
    }]
  };

  return (
    <div className='graph-container'>
      <h2>Top Languages</h2>
      {/* {languages.map(language => <h1>hi</h1>)} */}
      {languages && <Doughnut data={data} />}
    </div>
  )
}
