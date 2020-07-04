import React from "react";
import './landingpage.css';
import ViewDataFetched from "../ViewDataFetched/viewdatafetched";
import Navbar from "../Navigation/nav.view";

export const LandingPage = ({data, country, setCountry, listOfCountries}) => {
    return (
            <div className="image-component">
                <div className="navbar-styles">
                    <Navbar listOfCountries={listOfCountries} country={country} setCountry={setCountry}/>
                </div>
                <div className="fetch" >
                    <ViewDataFetched data={data} />
                </div>
            </div>
    )
}