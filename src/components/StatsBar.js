import React from 'react';
import './StatsBar.css'

export default function StatsBar({ user }) {
  return (
    <div className='stats-bar'>
      <span className='stat-item'>
        <div className='stat-value'>{user.public_repos}</div>
        <div className='stat-key'>Repositories</div>
      </span>
      <span className='stat-item'>
        <div className='stat-value'>{user.followers}</div>
        <div className='stat-key'>Followers</div>
      </span>
      <span className='stat-item'>
        <div className='stat-value'>{user.following}</div>
        <div className='stat-key'>Following</div>
      </span>
    </div>
  )
}
