import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Login({ setUsername, username }) {
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = () => {
    setIsFetching(true);
  }

  return (
    <div>
      {isFetching && <Redirect to={`/user=${username}`} />}
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={handleSubmit}>Click me</button>
    </div>
  )
}
