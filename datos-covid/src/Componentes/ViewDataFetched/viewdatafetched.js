import React from 'react';
import '../../App.css';

const ViewDataFetched = ({data}) => {
console.log(data)
    return (
            <div>
                <img src={data.report.flag} className="country-flag" alt="logo" />
                    <p>País: {data.report.country}</p>
                    <p>Casos: {data.report.cases}</p>
                    <p>Muertes: {data.report.deaths}</p>
            </div>
    );
};

export default ViewDataFetched;


