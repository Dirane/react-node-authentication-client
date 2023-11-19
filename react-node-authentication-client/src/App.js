import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [message, setMessage] = useState('');

 const handleSignup = async () => {
  try {
    await axios.post('http://localhost:4000/api/signup', {username, password });
    setMessage('User created successfully');
  } catch (error) {
    setMessage('Error creating user');
  }
 };

 const handleSignin = async () => {
  try {
    const response = await axios.post('http://localhost:4000/api/signin', { username, password});
    setMessage(`Welcome ${username}`);
    console.log('Token:', response.data.token);
  } catch (error) {
    setMessage('Invalid username or password')
  }
 };

 return (
  <div className='App'>
    <h1>React Node Authentication</h1>
    <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
    <button onClick={handleSignup}>Signup</button>
    <button onClick={handleSignin}>Signin</button>
    <p>{message}</p>
     </div>
 )
}

export default App;
