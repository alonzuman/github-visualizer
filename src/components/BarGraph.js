import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarGraph({ events }) {
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
    labels,
    datasets: [
      {
        label: 'Amount of actions',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: newData,
      }
    ]
  };

  return (
    <div className='bar-container'>
      <div>
        <h2>Activity</h2>
        <Bar
          data={data}
          width={100}
          height={100}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  )

}

