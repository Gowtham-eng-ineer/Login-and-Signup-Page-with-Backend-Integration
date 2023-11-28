import React, { useState } from 'react';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="loginUsername">Username:</label>
        <input type="text" id="loginUsername" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="loginPassword">Password:</label>
        <input type="password" id="loginPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;