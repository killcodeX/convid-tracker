import React, { useState } from 'react'
import { Consumer } from '../../context';
import Spinner from '../spinner';

function Country() {

    const [country, setCountry] = useState([]);
    const [name, setName] = useState('');

    // console.log('yeh country hookse h', country)
    // console.log('yeh name hook h',name)

    // 
    function Submit (e){
        e.preventDefault();
        alert(`this form is submited ${name}`)
        setName('')
    }

    // const stateChange = (e) =>{
    //     Setname({[e.target.name]:e.target.value});
    // }

    return (
        <Consumer>
            { value =>{
                // console.log('yeh context se h',value.countries)
                if (!value.chart.length){
                    return <Spinner/>
                }
                else{
                    setCountry(value.countries)

                    return (
                        <div className='columns'>
                            <div className='column'>
                                <form onSubmit={Submit}>
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