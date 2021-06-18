import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import router, { useRouter } from 'next/router';

const AuthContext = createContext({});

const api = axios.create({
  baseURL: 'http://localhost:1337',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

interface ProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on load
  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');

      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        // if (user) setUser(user);
      }

      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (identifier: string, password: string) => {
    try {
      const { data } = await api.post('auth/local', { identifier, password });

      const { jwt: token, user } = data;

      if (token) {
        Cookies.set('token', token, { expires: 60000000 });

        api.defaults.headers.Authorization = `Bearer ${token.token}`;

        setUser(user);

        router.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    Cookies.remove('token');

    setUser(null);

    delete api.defaults.headers.Authorization;

    window.location.pathname = '/login';
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth: any = () => useContext(AuthContext);

export const ProtectRoute = ({ children }: any) => {
  const router = useRouter();

  //@ts-ignore
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading || (!isAuthenticated && !['/', '/login'].includes(router.pathname))) {
    return <h1>Loading...</h1>;
  }

  return children;
};
