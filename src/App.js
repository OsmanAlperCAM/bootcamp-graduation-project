import React from 'react';
import Navigation from './Navigation';
import Provider from './context/Provider';
import FlashMessage from "react-native-flash-message";

const App = props => {
  return (
    <Provider>
      <Navigation />
      <FlashMessage position="top" />
    </Provider>
  );
};
export default App;
