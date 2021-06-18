import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthContext';

export default function Login() {
  const { login, user, setUser } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Temp Changes
    // login(username, password);
    setUser('notNull');
    router.push('/dashboard');
  };

  if (user) {
    router.push('/dashboard');
  }

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
