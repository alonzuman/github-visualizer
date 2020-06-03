import React from 'react';
import './Repositories.css';
import RepoCard from './RepoCard';

export default function Repositories({ repos }) {
  console.log(repos)

  return (
    <div className='repos-grid'>
      {repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
    </div>
  )
}
