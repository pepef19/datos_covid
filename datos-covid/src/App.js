import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {LandingPage} from "./Componentes/LandingPage/landingpage";
import {Test} from "./Componentes/test";

function App() {

    const [listOfCountries, setListOfCountries ] = useState([]);

    useEffect(() => {
        fetch(`https://covid19api.io/api/v1/CountriesWhereCoronavirusHasSpread`, options)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(data => {
                console.log(data);
                setListOfCountries(data.table);
            })
            .catch(error => console.log(error));
    }, []);




    const [data, setData] = useState({
        "report": {
            "country": "spain",
            "flag": "https://www.worldometers.info/img/flags/small/tn_sp-flag.gif",
            "cases": 297625,
            "deaths": 28385,
            "recovered": null,
            "active_cases": [
                {
                    "currently_infected_patients": 72282,
                    "inMidCondition": 71665,
                    "criticalStates": 617
                }
            ],
            "closed_cases": []
        }
    });

    const [country, setCountry] = useState('Spain');

    const options = {
        headers: new Headers(),
        method: 'GET',
    }

    useEffect(() => {
        fetch(`https://covid19api.io/api/v1/ReportsByCountries/${country}`, options)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.log(error));
    }, [country]);

  return (
    <div className="App">
        <Router>
            <header className="App-header">
                <Switch>
                    <Route exact path="/" render={() => <LandingPage listOfCountries={listOfCountries} data={data} country={country} setCountry={setCountry}/>}/>
                    <Route exact path="/test" render={props => <Test {...props}/>}/>
                </Switch>
            </header>
        </Router>
    </div>


  );
}

export default App;
