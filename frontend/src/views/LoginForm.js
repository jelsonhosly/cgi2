import React, { useState } from 'react';
import axios from 'axios';
import {Button} from "reactstrap";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5050/login', {
        username,
        password
      });

      if (response.data.token) {
        console.log('Login successful');
      } else {
        console.log('Login failed');
      }

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button className="mx-2" color="info" onClick={handleLogin}> Login </Button>
    </div>
  );
};

export default LoginForm;
