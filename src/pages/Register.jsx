import React, { useState } from 'react'

const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function registerInit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('Registration successful!');
    } else {
      alert('Registration failed!');
    }
  }

  return (
    <form className='register' onSubmit={registerInit}>
        <h1>Register</h1>
        <input 
          type='text' 
          value={username} 
          placeholder='username' 
          onChange={e => setUsername(e.target.value)} 
          required 
        />
        <input 
          type='password' 
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required 
        />
        {/* <input 
          type='password' 
          placeholder='confirm password'
          onChange={e => {if (e.target.value !== password){console.log("Password No Match!")}}}
          required 
        /> */}
        <button>Register</button>
    </form>
  )
}

export default Register