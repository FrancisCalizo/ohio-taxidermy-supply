import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'components/AuthContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';

import { theme } from 'components/Theme';

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: any) => <>{page}</>);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {/* <ProtectRoute> */}
        {getLayout(<Component {...pageProps} />)}
        {/* </ProtectRoute> */}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
