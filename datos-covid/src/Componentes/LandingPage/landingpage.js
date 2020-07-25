import React from "react";
import './landingpage.css';
import ViewDataFetched from "../ViewDataFetched/viewdatafetched";
import Navbar from "../Navigation/nav.view";
import SeriesData from "../ViewDataFetched/seriesData";

export const LandingPage = ({data, country, setCountry, listOfCountries, seriesData}) => {
    return (
            <div className="image-component">
                <div className="fetch2" >
                    <ViewDataFetched data={data} />
                </div>
                <div className="fetch2" >
                    <SeriesData seriesData={seriesData} />
                </div>
            </div>
    )
}