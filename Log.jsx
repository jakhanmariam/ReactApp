import React, { useState } from 'react';

function Log({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLog = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
     setUser(storedUser);
    } else {
      alert('Wrong email or password');
    }
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <input className='inp' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
      <input className='inp' type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
      <button className='btn' onClick={handleLog}>Login</button>
    </div>
  );
}

export default Log;