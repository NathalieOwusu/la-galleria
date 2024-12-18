import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Username:', username);
      console.log('Password:', password);
     // we wait for our API call
    };

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
        </div>
        <div>
            <label>Password:</label>
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Login</button>
        </form>
    </div>
  );


 }

 export default Login;