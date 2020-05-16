import React, { Component } from 'react';
import { Consumer } from '../../context';

class Card extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    console.log('in cards-->',value);
                }}
            </Consumer>
        )
    }
}


export default Card;
