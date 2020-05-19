import React, { Component } from 'react';
import axios from "axios";
import Country from './components/country/country';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        data : {},
        chart : {},
        countries : {}
    }
    componentDidMount(){
        axios.get('https://covid19.mathdro.id/api')
            .then(res => {
                // console.log(res.data)
                this.setState({ data : res.data});
            })
            .catch(err => console.log(err))

        axios.get('https://covid19.mathdro.id/api/daily')
        .then(res => {
            const result = res.data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
            this.setState({ chart : result});
        })
        .catch(err => console.log(err))

        axios.get('https://covid19.mathdro.id/api/countries')
        .then(res => {
            console.log('yeh country ka res h', res)
            const result = res.data;
            this.setState({ countries : result});
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <Context.Provider value= {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;