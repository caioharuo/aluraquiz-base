import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        
        <title>Alura - Valorant QUIZ</title>

        <meta property="og:title" content="Valorant QUIZ" key="title" />
        <meta
          property="og:image"
          content="https://scontent.fcgh34-1.fna.fbcdn.net/v/t1.0-9/139369975_490873948979309_3292305700757819868_o.png?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeF3T5ep79hP3a0-5EzjJX4SALLrN95i45oAsus33mLjmtg8bgGBzQ9EoXq6S5PeMAKdPHZTJYMmlRzOkTq5aMu8&_nc_ohc=HwUccTgFm3kAX9Bq2oz&_nc_ht=scontent.fcgh34-1.fna&oh=654b780757590a3e84043b6b141f23db&oe=60332A80"
          key="image"
        />

        <link rel="shortcut icon" href="https://pbs.twimg.com/profile_images/1295457884038467586/zflMaBTL_400x400.jpg" />

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
