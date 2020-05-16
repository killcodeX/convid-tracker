import React from 'react';
import './App.css';
import { Provider } from './context';
import Card from './components/cards/card';

function App() {
  return (
    <Provider>
      <React.Fragment>
        <h1>Hello world</h1>
        <Card/>
      </React.Fragment>
    </Provider>
  );
}

export default App;
