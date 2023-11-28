import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Password, setPassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const handleSignup = () => {
    const userData = { Firstname, Lastname, Password, Confirmpassword };
    onSignup(userData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="Firstname">First Name:</label>
        <input type="text" id="Firstname" value={Firstname} onChange={(e) => setFirstname(e.target.value)} />
      </div>
      <div>
        <label htmlFor="Lastname">Last Name:</label >
        <input type="text" id="Lastname" value={Lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>
      <div>
        <label htmlFor="Password">Password:</label>
        <input type="password" id="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="ConfirmPassword">Confirm Password:</label>
        <input type="password" id="ConfirmPassword" value={Confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
