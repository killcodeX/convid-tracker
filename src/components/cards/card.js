import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../spinner';

class Card extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { confirmed, recovered, deaths, lastUpdate } = value;
                    console.log(value);
                    if( confirmed === undefined || confirmed.length == 0){
                        return <Spinner/>
                    }
                    else{
                        
                    }
                }}
            </Consumer>
        )
    }
}


export default Card;
