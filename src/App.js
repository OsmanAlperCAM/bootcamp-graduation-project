import React from 'react';
import Navigation from './Navigation';
import Provider from './context/Provider';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';

const App = props => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider>
      <Navigation />
      <FlashMessage position="top" />
    </Provider>
  );
};
export default App;
