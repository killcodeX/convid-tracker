import React from 'react';
import './App.css';
import { Provider } from './context';
import Card from './components/cards/card';
import Spinner from './components/spinner';

function App() {
  return (
    <Provider>
      <React.Fragment>
        <h1>Hello world</h1>
        <Spinner />
        <Card/>
      </React.Fragment>
    </Provider>
  );
}

export default App;
