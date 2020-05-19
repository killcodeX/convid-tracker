import React, {useState} from 'react';
import { Consumer } from '../../context';
import { Line, Bar } from 'react-chartjs-2';
import Spinner from '../spinner';

function Chart() {

    const [dailyData, setdailyData] = useState([]);

    // dailyData.map(confirmed => console.log('dailydata--->>',confirmed.confirmed))
    const lineChart = (
        dailyData[0] ?
        (<Line 
            data={{
                labels : dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label : 'Infected',
                    borderColor : '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label : 'Deaths',
                    backgroundColor : 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
        />) : null
    );

    return (
        <Consumer>
            {value => {
                if (!value.chart.length){
                    return <Spinner/>
                }
                else{
                    setdailyData(value.chart)

                    return (
                        <div>
                            {lineChart}
                        </div>
                    );
                }
            }}
        </Consumer>
    )
}

export default Chart;