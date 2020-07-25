import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {LandingPage} from "./Componentes/LandingPage/landingpage";
import MapChart from "./Componentes/MapChart/MapChart";
import Navbar from "./Componentes/Navigation/nav.view";

function App() {

    const [listOfCountries, setListOfCountries ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/country/country_codes`, options)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(data => {
                console.log(data);
                setListOfCountries(data)
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

    const [country, setCountry] = useState('AFG');

    const options = {
        headers: new Headers(),
        method: 'GET',
    }

    useEffect(() => {
        fetch(`http://localhost:5000/country/${country}`, options)
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

    const [ seriesData, setSeriesData ] = useState([""]);

    useEffect(() => {
        fetch(`http://localhost:5000/series/country/${country}`, options)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(data => {
                console.log(data);
                setSeriesData(data);
            })
            .catch(error => console.log(error));
    }, [country]);

  return (
    <div className="App">
        <Router>
            <header className="App-header">
                <div className="navbar-styles">
                    <Navbar listOfCountries={listOfCountries} country={country} setCountry={setCountry}/>
                </div>
                <LandingPage seriesData={seriesData} listOfCountries={listOfCountries} data={data} country={country} setCountry={setCountry}/>
                <div className="mapa">
                    <MapChart />
                </div>
            </header>
        </Router>
    </div>


  );
}

export default App;
