import React from 'react';
import Navigation from './Navigation';
import Provider from './context/Provider';

const App = props => {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
};
export default App;
