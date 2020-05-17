import React from 'react';
import './App.css';
import { Provider } from './context';
import Card from './components/cards/card';
import Spinner from './components/spinner';

function App() {
  return (
    <Provider>
      <React.Fragment className='section'>
        <div className='container'>
          <h1 className='title is-2'>Hello world</h1>
          {/* <Spinner /> */}
          <Card/>
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App;
