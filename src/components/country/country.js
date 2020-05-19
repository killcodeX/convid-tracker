import React, { useState } from 'react'
import { Consumer } from '../../context';
import Spinner from '../spinner';

function Country() {

    const [country, Setcountry] = useState([]);

    // country.map(c => console.log(c.countries))

    return (
        <Consumer>
            { value =>{
                console.log('yeh context se h',value.countries)
                if (!value.chart.length){
                    return <Spinner/>
                }
                else{
                    Setcountry(value.countries)

                    return (
                        <div className='columns'>
                            <div className='column'>
                                <form>
                                    <div class="field">
                                        <label class="label">Pick your Country</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input" type="text" placeholder="Text input" value="bulma"/>
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-globe-asia"></i>
                                            </span>
                                            <span class="icon is-small is-right">
                                                <i class="fas fa-check"></i>
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