import React, {useEffect, useState} from 'react';
import {Line} from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-moment';
import './LineGraph.css'

Chart.register(...registerables);



function LineGraph() {

    const [graphData, setGraphData ] = useState([]);

    const sample_data = {
        "Labels": [
            'March',
            'April',
            'May',
            'June',
            'July'
        ],
        "Values": [
            5,
            12,
            15,
            26,
            21
        ]
    };

    const createMockData = () => {
        let data = [];
        let value=50;
        for(var i=0;i<364;i++){
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            data.push({x: date, y: value});
        }
        setGraphData(data);
    }

   useEffect(()=>{
    createMockData();
   }, [])
        

  return (
    <div className="linegraph">
        <Line 
            data={{
                labels: graphData.date,
                // labels: graphData.date,
                // labels:sample_data.Labels,
                datasets: [
                    {  
                        label: "Price",
                        type: 'line',
                        data: graphData,
                        // data: sample_data.Values,
                        backgroundColor: "white",
                        borderColor:"blue",
                        borderWith:2,
                        pointBorderColor:'rgba(0,0,0,0)',
                        pointHoverBackgroundColor: 'rgba(0,0,0,0)',
                        pointHoverBorderColor:'#5AC53B',
                        pointHoverBorderWidth: 4,
                        pointHoverRadius:6,
                    }
                ]
            }}

            options={{
                maintainAspectRatio: false, 
                responsive:true,
                adapters: {
                    type: 'time',
                  },
                elements: {
                    point: {
                        radius:0
                    }
                },
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display:false,
                    },
                    labels: {
                        display: false,
                    }
                },
                tooltip: {
                    mode: "nearest",
                    intersect:false, 
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            format: 'MM/DD/YY',
                            tooltipFormat: "ll",
                        },
                        grid: {
                            display: false, 
                        },
                        ticks: {
                            display:false
                        },
                        
                    },
                    y: {
                        grid: {
                            display: false, 
                        },
                        ticks: {
                            display: false
                        }
                    },
                }
            }}

        />
    </div>
  )
}

export default LineGraph