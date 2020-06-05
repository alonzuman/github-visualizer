import React from 'react';
import './Repositories.css';
import RepoCard from './RepoCard';

export default function Repositories({ repos }) {
  return (
    <div className='repos-grid'>
      {repos && repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
    </div>
  )
}
