import React, { Component } from 'react';
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {

    state = {
        data:{},
        chart:{}
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
            this.setState({ chart : res.data});
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