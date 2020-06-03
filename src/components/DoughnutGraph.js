import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutGraph({ languages }) {
  let labels = [];
  let dataSetsData = [];
  let languageColors = [];

  languages.map(language => {
    labels.push(language.label);
    dataSetsData.push(language.value);
    languageColors.push(language.color)
  })

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
      <Doughnut data={data} />
    </div>
  )
}
