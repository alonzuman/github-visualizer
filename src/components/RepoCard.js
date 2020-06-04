import React from 'react';
import './RepoCard.css'

export default function RepoCard({ repo }) {

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <li className='repo-card'>
      <a target='_blank' href={`https://github.com/${repo.owner.login}/${repo.name}`}>
        <h2 className='cut-text repo-name primary'>{repo.name}</h2>
        <div className='repo-stats'>
          <div className='stats-group'>
            <span className='repo-stat-item'><b>{repo.language}</b></span>
            <span className='repo-stat-item'>
              <i className="fas fa-code-branch margin-right"></i>
              <span>{repo.forks_count}</span>
            </span>
            <span className='repo-stat-item'>
              <i className="fas fa-star margin-right"></i>
              <span>{repo.stargazers_count}</span>
            </span>
          </div>
          <div className='stats-group'>
            <span>{numberWithCommas(repo.size)} KB</span>
          </div>
        </div>
      </a>
    </li>
  )
}
