import React, { Component } from 'react';
import axios from "axios";
import Country from './components/country/country';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'SELECT_COUNTRY':
            return {
                ...state,
                cont:action.payload
            };
        default:
            return state;
    }
}

    const url = 'https://covid19.mathdro.id/api';
    let changeableUrl =  url; 

export class Provider extends Component {

    state = {
        data : {},
        countryData: null,
        chart : {},
        countries : {},
        cont: '',
        dispatch : action => this.setState(state =>
            reducer(state,action))
    }

    componentDidMount(){
            axios.get(changeableUrl)
            .then(res => {
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
            const { countries } = res.data;
            this.setState({ countries : countries.map( country => country.name)});
        })
        .catch(err => console.log(err))

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.cont !== this.state.cont){
            axios.get(`${changeableUrl}/countries/${this.state.cont}`)
            .then(res => {
                console.log('coming from country api',res.data)
                this.setState({ countryData : res.data});
            })
            .catch(err => console.log(err))
        }
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