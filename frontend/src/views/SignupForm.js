import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import axios from 'axios';

const SignupForm = ({ onSignupSuccess, nextChildID }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [childID, setChildID] = useState(nextChildID);


  useEffect(() => {
    // Update the childID state whenever nextChildID changes
    setChildID(nextChildID);
  }, [nextChildID]);

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5050/signup', {
        email,
        username,
        password,
        childID: nextChildID 
      });

      if (response.data.message === 'User created successfully') {
        onSignupSuccess(); 
      } else {
        // Handle signup failure
      }
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup failure
    }
  };

  return (
    <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Sign</CardTitle>
              <input type="text" value={nextChildID} disabled placeholder="ChildID" />
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <button onClick={handleSignup}>Sign Up</button>
            <CardSubtitle className="text-muted mb-1" tag="h6">
            </CardSubtitle>
          </CardBody>
        </Card>
    </div>
  );
};

export default SignupForm;
