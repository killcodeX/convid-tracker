import React, {useState} from 'react';
import { Consumer } from '../../context';
import { Line, Bar } from 'react-chartjs-2';
import Spinner from '../spinner';

function Chart() {

    const [dailyData, setdailyData] = useState([]);
    const [country, setCountry] = useState('');
    const [countryData, setcountryData] = useState(null);

    // dailyData.map(confirmed => console.log('dailydata--->>',confirmed.confirmed))
    console.log('componenet rerendered');
    React.useEffect(() =>{
        console.log('country data receieved',country)
        console.log('country data right now ', countryData)
        
    },[country, countryData])

    const lineChart = (
        dailyData[0] ?
        (<Line 
            data={{
                labels : dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label : 'Infected',
                    borderColor : '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label : 'Deaths',
                    backgroundColor : 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
        />) : null
    );

    const barChart = (
        countryData !== null ? (
            <Bar 
                data = {{
                    labels : [ 'Infected', 'Recovered', 'Deaths'],
                    datasets : [{
                        label : 'People',
                        backgroundColor : ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                        data : [countryData.confirmed.value, countryData.recovered.value, countryData.deaths.value]
                    }]
                }}
                options = {{
                    legend : { display : false },
                    title : { display : true, text : `current state in ${country}`}
                }}
            />
        ): null
    );

    return (
        <Consumer>
            {value => {
                const { cont, countryData, chart } = value;
                if (!chart.length){
                    return <Spinner/>
                }
                else{
                    setdailyData(chart)
                    setCountry(cont)
                    setcountryData(countryData);
                    return (
                        <div>
                            { countryData !== null ? barChart : lineChart}
                        </div>
                    );
                }
            }}
        </Consumer>
    )
}

export default Chart;







// import React from "react";
// import "./styles.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const Home = ({ history }) => {
//   const [login, setLogin] = React.useContext(UserContext);
//   React.useEffect(() => {
//     // console.log("value of login", login);
//     if (login === false) {
//       history.push("/login");
//     }
//   }, [login, history]);
//   return (
//     <>
//       <h1>User Logged in is {JSON.stringify(login)}</h1>
//       <button onClick={() => setLogin(false)}>Logout</button>
//     </>
//   );
// };

// const Login = ({ history }) => {
//   const [login, setLogin] = React.useContext(UserContext);
//   React.useEffect(() => {
//     // console.log("value of login", login);
//     if (login === true) {
//       history.push("/");
//     }
//   }, [login, history]);
//   return (
//     <>
//       <h1>Logged in is {JSON.stringify(login)}</h1>
//       <button onClick={() => setLogin(true)}>Login</button>
//     </>
//   );
// };

// const UserContext = React.createContext();

// export default function App() {
//   const [login, setLogin] = React.useState(false);
//   return (
//     <div className="App">
//       <UserContext.Provider value={[login, setLogin]}>
//         <Router>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/login" component={Login} />
//           </Switch>
//         </Router>
//       </UserContext.Provider>
//     </div>
//   );
// }
