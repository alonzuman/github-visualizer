import React from 'react';
import './RepoCard.css'

export default function RepoCard({ repo }) {
  return (
    <li className='repo-card'>
      <a target='_blank' href={`https://github.com/${repo.owner.login}/${repo.name}`}>
        <h2 className='cut-text'>{repo.name}</h2>
        <div className='repo-stats'>
          <div className='stats-group'>
            <span>{repo.language}</span>
            <span>{repo.forks_count}</span>
            <span>{repo.stargazers_count}</span>
          </div>
          <div className='stats-group'>
            <span>{repo.size} KB</span>
          </div>
        </div>
      </a>
    </li>
  )
}
