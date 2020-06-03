import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      Failed to fetch
      <Link to='/'>Try Again</Link>
    </div>
  )
}
