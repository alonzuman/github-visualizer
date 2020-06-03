import React from 'react';
import './DataVisualization.css';
import BarGraph from './BarGraph';
import Repositories from './Repositories';
import DoughnutGraph from './DoughnutGraph';
import PolarGraph from './PolarGraph';

export default function DataVisualization({ events, repositories, languages }) {
  return (
    <div className='container'>
      <div className='data-container'>
        {/* <BarGraph events={events} /> */}
        <PolarGraph events={events} />
        <DoughnutGraph languages={languages} />
      </div>
      <Repositories repos={repositories} />
    </div>
  )
}
