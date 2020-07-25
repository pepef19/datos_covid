import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule, Marker
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
    .domain([0, 1000])
    .range(["#ffedea", "#ff5233"]);

const MapChart = () => {

    const [data, setData] = useState(undefined);
    const baseUrl = "https://covid19api.io/api/v1/CountriesWhereCoronavirusHasSpread";
    const options = {
        headers: new Headers(),
        method: 'GET',
    }

    useEffect(() => {
        fetch(baseUrl, options)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(data => {
                console.log(data);
                setData(data.table);
            })
            .catch(error => console.log(error));
    }, [setData]);

    return (
        <ComposableMap
            projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 130
            }}
        >
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
            {data && data.length > 0 && (
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const d = data.find(country => country.Country === geo.properties.NAME || country.Country === geo.properties.NAME_LONG)

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={d ? colorScale(d.Cases) : "#6c6771"}
                            />
                            );
                        })
                    }
                </Geographies>
            )}

        </ComposableMap>
    );
};

export default MapChart;
