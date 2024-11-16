import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === 'Success') {
          navigate('/Dashboard');
        }
      })
      .catch(error => console.log('err', error));
  };

  return (
    <section className='Signup-section'>
      <div className='main-div'>
        <div className='div-1'>
          <h4>Welcome to Login Page</h4>
          <form onSubmit={handleLogin}>
            <label>Email :</label>
            <input 
              type='email' 
              required 
              placeholder='Enter Your Email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input 
              type='password' 
              required 
              placeholder='Enter Your Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
          </form>
        </div>
        <h6>If you are a new user? <Link to='/'>Sign Up</Link></h6>
      </div>
    </section>
  );
};
