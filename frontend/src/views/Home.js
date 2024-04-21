import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your signup logic here
      // Example: Sending a POST request to an API endpoint
      const response = await axios.post('your_signup_endpoint', {
        username,
        password
      });
      console.log('Signup successful:', response.data);
      // You can handle any success scenario here, such as redirecting the user
    } catch (error) {
      console.error('Signup failed:', error);
      // You can handle any error scenario here, such as displaying an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="form-control mb-2" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control mb-2" />
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default Home;
