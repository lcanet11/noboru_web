import React from 'react'
import Chart from 'chart.js/auto'
import './LineGraph.css'

function LineGraph() {


  return (
    <div className="linegraph">
        <Line 
            data={{
                datasets: [
                    {
                        type: "line",
                        data: data
                    }
                ]
            }}

        
        
        />
    </div>
  )
}

export default LineGraph