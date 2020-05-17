import React from 'react';
import { Consumer } from '../../context';
import Spinner from '../spinner';
import CountUp from 'react-countup';

function Card () {
    return (
        <Consumer>
            {value => {
                const { confirmed, recovered, deaths, lastUpdate } = value.data;
                if( confirmed === undefined || confirmed.length === 0){
                    return <Spinner/>
                }
                else{
                    return (
                        <div className='columns'>
                            <div className='column'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <p className="card-header-title">Recovered</p>
                                    </div>
                                    <div class="card-content">
                                        <p className='title is-4'>
                                            <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
                                        </p>
                                        <p className='title is-4'>{new Date(lastUpdate).toDateString()}</p>
                                        <p className='subtitle is-6'>Number of recoveries from COVID-19</p>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <p className="card-header-title">Infected</p>
                                    </div>
                                    <div class="card-content">
                                        <p className='title is-4'>
                                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
                                        </p>
                                        <p className='title is-4'>{new Date(lastUpdate).toDateString()}</p>
                                        <p className='subtitle is-6'>Number of active cases of COVID-19</p>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='card'>
                                    <div className='has-text-centered card-header is-3'>
                                        <p className="card-header-title">Deaths</p>
                                    </div>
                                    <div class="card-content">
                                        <p className='title is-4'>
                                            <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
                                        </p>
                                        <p className='title is-4'>{new Date(lastUpdate).toDateString()}</p>
                                        <p className='subtitle is-6'>Number of deaths caused by COVID-19</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }}
        </Consumer>
    )
}


export default Card;
