import React from 'react';
import './App.css';
import { Provider } from './context';
import Card from './components/cards/card';
import Chart from './components/charts/chart';
import Spinner from './components/spinner';
import Banner from './components/banner.png';

function App() {
  return (
    <Provider>
      <React.Fragment className='section'>
        <div className='container'>
          <div className='media has-text-centered'>
            <img className='banner' src={Banner}/>
          </div>
          <Card/>
          <Chart/>
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App;
