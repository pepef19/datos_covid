import React from 'react';
import '../../App.css';
import {Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const SeriesData = ({seriesData}) => {
    console.log(seriesData)
        return (
            <LineChart
                width={500}
                height={300}
                data={seriesData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="new_cases" stroke="#8884d8" dot={false} />
            </LineChart>
        );
};

export default SeriesData;


