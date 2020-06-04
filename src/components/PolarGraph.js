import React from 'react';
import { Polar } from 'react-chartjs-2';

export default function PolarGraph({ events }) {
  let actions = [];
  events.map(event => {
    actions.push(event.type)
  })

  let counts = [];
  actions.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1
  });

  let labels = Object.keys(counts);
  let newData = Object.values(counts);

  const data = {
    datasets: [{
      data: newData,
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB'
      ],
      label: 'My dataset' // for legend
    }],
    labels
  };

  return (
    <div className='graph-container'>
      <h2>Common Actions</h2>
      <Polar data={data} />
    </div>
  )
}
