import React from 'react'
import { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();
        //API call
    }

  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSumbit}>
            
            <label>Username:</label>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label>Password</label>
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='sumbit'>Sign-Up</button>
        </form>
    </div>
  )
}

export default SignUp;