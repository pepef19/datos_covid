import React from 'react';
import '../../App.css';

const ViewDataFetched = ({data}) => {
console.log(data)
    return (
            <div className="country-info-div">
                    <p>Country code: {data.country_code}</p>
                    <p>Continente: {data.continent}</p>
            </div>
    );
};

export default ViewDataFetched;


