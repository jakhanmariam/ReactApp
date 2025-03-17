import React from 'react';
import '../index.css'

function HomePage({ user, onLogout, onDeleteAccount }) {
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <button onClick={onLogout}>Logout</button>
      <button onClick={onDeleteAccount}>Delete acc</button>
    </div>
  );
}

export default HomePage;