import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer

  } from "recharts";
const Statistics = () => {
    const data =[
        {
        "id": 1,
        "name": "React",
        "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
        "total": 8
        },
        {
        "id": 2,
        "name": "JavaScript",
        "logo": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
        "total": 9
        },
        {
        "id": 4,
        "name": "CSS",
        "logo": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
        "total": 8
        },
        {
        "id": 5,
        "name": "Git",
        "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
        "total": 11
        }
        ];
        
    return (
        <div>
       <ResponsiveContainer width="100%" aspect={2/1}>
            <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey=""
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="total" stroke="#82ca9d" />
    </LineChart>
    </ResponsiveContainer>
    <div>
        <h1> here is the summary</h1>
    </div>
        </div>

    );
};

export default Statistics;