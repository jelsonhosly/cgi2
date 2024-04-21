import React, { useState, useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const WeightGraph = () => {
  const [chartData, setChartData] = useState([]);
  const [actualWeight, setActualWeight] = useState(null);
  const childID = '1';

  useEffect(() => {
    // Fetch data from the backend server for weight chart
    fetch("http://localhost:5050/weightM")
      .then((response) => response.json())
      .then((data) => {
        setChartData(data); // Set the fetched data to the state
      })
      .catch((error) => console.error("Error fetching weight data:", error));

    // Fetch actual weight data for the specified child
    fetch(`http://localhost:5050/aW/${childID}`)
      .then((response) => response.json())
      .then((data) => {
        const actualWeightValues = data.map(item => item.Weight);
        setActualWeight(actualWeightValues); // Set the fetched actual weight values to the state
      })
      .catch((error) => console.error("Error fetching actual weight:", error));
  }, [childID]);

  const prepareChartData = () => {
    const series = [];
    const categories = [];

    // Iterate over the fetched data to prepare series for each curve
    for (let i = 3; i >= -3; i--) {
      const data = chartData.map((item) => item[`SD${i}`]);
      series.push({
        name: `SD${0 + i}`,
        data: data,
      });
    }

    // Prepare categories (Months)
    chartData.forEach((item) => {
      categories.push(item.Month);
    });

    if (actualWeight !== null) {
      series.push({
        name: "Actual Weight",
        data: actualWeight,
      });
    }

    return {
      series: series,
      options: {
        chart: {
          height: 600,
          type: 'area',
          stacked: false,
        },
        xaxis: {
          categories: categories,
          title: {
            text: 'Months',
          },
        },
        yaxis: {
          min: 0, // Set the minimum value of the y-axis
          max: 30, // Set the maximum value of the y-axis
          title: {
            text: 'Weight',
          },
        },
        grid: {
          show: true, // Show grid lines
        },
        colors: ['#8F00FF', '#FFA200', '#5BFF94', '#00B03D', '#C5CBCD', '#FFA200', '#FF2600', '#0000FF'], // Add more colors as needed
        dataLabels: {
          enabled: false // Disable data labels
        },
        stroke: {
          width: 0.5, // Set the stroke width to 2 (adjust as needed)
        },
        fill: {
          opacity: 1, // Set the opacity of the filled area
        },
      }
    };
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">WeightM</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Monthly Report According to the WHO Standards
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="600"
          options={prepareChartData().options}
          series={prepareChartData().series}
        />
      </CardBody>
    </Card>
  );
};

export default WeightGraph;
