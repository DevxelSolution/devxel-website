// /src/pages/_app.jsx

import * as React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
      <Component {...pageProps} />
    // </ThemeProvider>
  );
}

export default MyApp;
