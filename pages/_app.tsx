import { AuthProvider } from 'components/AuthContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      {/* <ProtectRoute> */}
      <Component {...pageProps} />
      {/* </ProtectRoute> */}
    </AuthProvider>
  );
}

export default MyApp;
