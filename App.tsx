import React, { useState, useEffect } from 'react';
import Reg from './exam1/Reg';
import Log from './exam1/Log';
import HomePage from './exam1/HomePage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleDeleteAccount = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleGuestLogin = () => {
    setUser({ name: 'Guest' });
  };

  return (
    <div>
      {!user ? (
        <>
          <Log setUser={setUser} />
          <Reg setUser={setUser} />
          <button onClick={handleGuestLogin}>Guest</button>
        </>
      ) : (
        <HomePage user={user} onLogout={handleLogout} onDeleteAccount={handleDeleteAccount} />
      )}
    </div>
  );
}

export default App;


























