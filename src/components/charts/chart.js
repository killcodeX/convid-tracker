import React from 'react';
import { Consumer } from '../../context';

function Chart() {
    return (
        <Consumer>
            {value => {
                console.log(value.chart)
            }}
        </Consumer>
    )
}

export default Chart;