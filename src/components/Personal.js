import React from 'react';
import StatsBar from './StatsBar';
import './Personal.css'

export default function Personal({ user }) {
  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  const fixedDate = (string) => {
    const parsed = parseISOString(string).toString();
    const a = parsed.split(' ');
    let arr = `${a[1]} ${a[2]}, ${a[3]}`;
    return arr
  }

  return (
    <div className='personal-info'>
      <img className='avatar' alt={`${user.login}'s avatar`} src={user.avatar_url} />
      <a href={`https://www.github.com/${user.login}`} target='_blank' rel='noreferrer noopener'>
        <h1 className='username primary'>@{user.login}</h1>
      </a>
      <div className='bio'>{user.bio}</div>
      <div className='joined-at'>Joined {fixedDate(user.created_at)}</div>
      <StatsBar user={user} />
    </div >
  )
}
