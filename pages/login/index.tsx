import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    axios
      .post('http://localhost:1337/auth/local', {
        identifier: username,
        password: password,
      })
      .then((response) => {
        router.push('/dashboard');

        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="login">
          Username or Email
          <div>
            <input
              type="text"
              id="login"
              name="login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </label>
      </div>

      <button style={{ marginTop: 10 }} type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
