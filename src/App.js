import React, { useState } from 'react';
// import './App.css';
import Login from './Login';
import Home from './Home';


const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout} />
      ) : (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}>
          <Login handleLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
