import React, { useState } from 'react';
import Signup from './components/SignUpp';
import Login from './components/Login';


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignup = (user) => {
    setLoggedInUser(user);
  };

  const handleLogin = (username) => {
    setLoggedInUser({ username });
  };
  return (
    <div className="container">
      {!loggedInUser ? (
        <>
          <Signup onSignup={handleSignup} />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <h2>Welcome,DEAR CLIENT {loggedInUser.username}✌</h2>
      )}
    </div>
  );
};

export default App;
