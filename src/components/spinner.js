import React from 'react';
import spinner from '../components/spinner.gif';

export default function Spinner() {
    return (
        <div>
            <img
                src={spinner}
                alt = "Loading...."
                style={{width: '100px', margin: '240px auto', display: 'block'}}
            />
        </div>
    )
}