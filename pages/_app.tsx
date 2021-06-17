import { AuthProvider, ProtectRoute } from 'components/AuthContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthProvider>
  );
}

export default MyApp;
