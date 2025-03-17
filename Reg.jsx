import React, { useState } from 'react';

function Reg({ setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleReg = () => {
    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <div className='container'>
      <h1>Register</h1>
      <input className='inp' type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
      <input className='inp' type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
      <input className='inp' type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
      <button className='btn' onClick={handleReg}>Register</button>
    </div>
  );
}

export default Reg;