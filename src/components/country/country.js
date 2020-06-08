import React, { useState } from 'react'
import { Consumer } from '../../context';
import Spinner from '../spinner';

function Country() {
    const [name, setName] = useState('');

    // 
    function Submit (e, dispatch){
        e.preventDefault();
        alert(`this form is submited ${name}`)

        dispatch({type: 'SELECT_COUNTRY', payload: name});
        setName('')
    }

    return (
        <Consumer>
            { value =>{
                if (!value.chart.length){
                    return <Spinner/>
                }
                else{
                    // setCountry(value.countries)
                    const { dispatch } = value;
                    console.log('coming from dispatch',dispatch)
                    return (
                        <div className='columns'>
                            <div className='column'>
                                <form onSubmit={Submit.bind(dispatch)}>
                                    <div className="field">
                                        <label className="label">Pick your Country</label>
                                        <div className="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="Enter Country name..." value={name} onChange={e => setName(e.target.value)}/>
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-globe-asia"></i>
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    );
                }
            }}
        </Consumer>
    )
}


export default Country;