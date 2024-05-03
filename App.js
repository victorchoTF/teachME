import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import LoginRegisterPage from './pages/LoginRegisterPage';
import MainPage from './pages/MainPage';
import ColorPallete from './ColorPallete';
import ProfilePage from './pages/ProfilePage';
import { PageProvider, usePageContext } from './contexts/PageContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <PageProvider>
      <UserProvider>
        <View style={Styles.root}>
            <PageContent />
        </View>
      </UserProvider>
    </PageProvider>
  );
}

const PageContent = () => {
  const pages = {
    loginRegisterPage: <LoginRegisterPage />,
    mainPage: <MainPage />,
    profilePage: <ProfilePage />
  };

  const { page } = usePageContext();

  return pages[page];
};

const Styles = StyleSheet.create({
  root: {
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
    lineHeight: 1.5,
    fontWeight: 400,

    colorScheme: 'light dark',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: ColorPallete.mainBlue,

    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
  },
  body: {
    margin: 0,
    display: 'flex',
    placeItems: 'center',
  },
  h1: {
    fontSize: '3.2em',
    lineHeight: 1.1,
  }
})

export default App;
