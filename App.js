import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import LoginRegisterPage from './pages/LoginRegisterPage';
import MainPage from './pages/MainPage';
import ColorPallete from './ColorPallete';

function App() {
  const pages = {
    loginRegisterPage: <LoginRegisterPage />,
    mainPage: <MainPage />,
    profilePage: undefined
  }

  const [page, setPage] = useState("mainPage");
  return (
    <View style={Styles.root}>
      {pages[page]}
    </View>
  );
}

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
