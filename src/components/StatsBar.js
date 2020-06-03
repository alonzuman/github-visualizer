import React from 'react';
import './StatsBar.css'

export default function StatsBar({ user }) {
  return (
    <div className='stats-bar'>
      <span className='stat-item'>
        <div className='stat-key'>Repositories:</div>
        <div className='stat-value'>{user.public_repos}</div>
      </span>
      <span className='stat-item'>
        <div className='stat-key'>Followers:</div>
        <div className='stat-value'>{user.followers}</div>
      </span>
      <span className='stat-item'>
        <div className='stat-key'>Following:</div>
        <div className='stat-value'>{user.following}</div>
      </span>
    </div>
  )
}
