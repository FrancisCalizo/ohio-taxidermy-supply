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
  const [isShowSuccessfulReg, setIsShowSuccessfulReg] = useState(false);

  // Check if user is logged in on load
  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        // TODO: REMOVE WHEN ABLE TO GET TOKEN FROM COOKIES VIA JWT ENCODE
        setUser({
          // @ts-ignore
          blocked: false,
          confirmed: false,
          created_at: '2021-06-18T01:34:57.524Z',
          email: 'francis@aagrav.com',
          id: 1,
          provider: 'local',
          role: {
            description: 'Default role given to authenticated user.',
            id: 1,
            name: 'Authenticated',
            type: 'authenticated',
            updated_at: '2021-06-18T01:34:57.531Z',
          },
          username: 'francis',
        });

        // if (user) setUser(user);
      }

      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  // TODO: Delete after fixing auth
  const TEMP_LOGIN = async () => {
    Cookies.set('token', 'this is a fake token', { expires: 60000000 });

    setUser(user);

    router.push('/dashboard');
  };

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

    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        isShowSuccessfulReg,
        setIsShowSuccessfulReg,
        isAuthenticated: !!user,
        user,
        setUser,
        login,
        loading,
        logout,
        TEMP_LOGIN,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth: any = () => useContext(AuthContext);

export const ProtectRoute = ({ children }: any) => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !['/', '/login'].includes(router.pathname)) {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return children;
};
