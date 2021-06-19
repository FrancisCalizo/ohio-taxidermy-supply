import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthContext';

export default function Login() {
  const { user, TEMP_LOGIN } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // TODO: Use AuthContext to handle user auth
    // login(username, password);
    TEMP_LOGIN();
    router.push('/dashboard');
  };

  // If user, bypass this login page
  if (user) {
    router.push('/dashboard');
  }

  console.log(user);

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
