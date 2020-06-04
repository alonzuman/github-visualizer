import React, { useState } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';

export default function Login({ setUsername, username }) {
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = () => {
    setIsFetching(true);
  }

  return (
    <div className='login-container'>
      {isFetching && <Redirect to={`/user=${username}`} />}
      <i className="login-icon fab fa-github"></i>
      <h1>Github Data Visualizer</h1>
      <input placeholder='Your github @username' value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={handleSubmit}>Go!</button>
    </div>
  )
}
