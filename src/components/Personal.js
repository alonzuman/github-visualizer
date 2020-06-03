import React from 'react';
import StatsBar from './StatsBar';
import './Personal.css'

export default function Personal({ user }) {
  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  return (
    <div className='personal-info'>
      <div>
        <img className='avatar' alt={`${user.login}'s avatar`} src={user.avatar_url} />
        <h1 className='username'>@{user.login}</h1>
        <div className='bio'>{user.bio}</div>
        <div className='joined-at'>Joined {user.created_at}</div>
        <StatsBar user={user} />
      </div>
    </div>
  )
}
