import { useState, useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const HeightGraphM = () => {
  const [chartData, setChartData] = useState([]);
  const [actualHeight, setActualHeight] = useState(null);
  const childID = '1'

  useEffect(() => {
    // Make an API request to fetch data from your backend server
    fetch("http://localhost:5050/heightM")
      .then((response) => response.json())
      .then((data) => {
        setChartData(data); // Set the fetched data to the state
      })
      .catch((error) => console.error("Error fetching data:", error));

    fetch(`http://localhost:5050/ah/${childID}`)
      .then((response) => response.json())
      .then((data) => {
        const actualHeightValues = data.map(item => item.Height);
        setActualHeight(actualHeightValues); // Set the fetched actual height values to the state
      })
      .catch((error) => console.error("Error fetching actual height:", error));
  }, []);

  // Prepare data for the chart
  const prepareChartData = () => {
    const series = [];
    const categories = [];

    // Iterate over the fetched data to prepare series for each curve
    for (let i = 3; i >= -3; i--) {
      const data = chartData.map((item) => item[`SD${i}`]);
      series.push({
        name: `SD${0+i}`,
        data: data,
      });
    }
    if (actualHeight !== null) {
      series.push({
        name: "Actual Height",
        data: actualHeight,
      });
    }
    
    // Prepare categories (Months)
    chartData.forEach((item) => {
      categories.push(item.Month);
    });

  
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
            text: 'Months->',
          },
        },
        yaxis: {
          min: 30, // Set the minimum value of the y-axis
          max: 100, // Set the maximum value of the y-axis
          title: {
            text: 'Height->',
          },
        },
        grid: {
          show: true, // Show grid lines
        },
        colors: ['#8F00FF', '#FFA200', '#5BFF94', '#00B03D','#C5CBCD','#FFA200','#FF2600','#0000FF'], // Add more colors as needed
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
        <CardTitle tag="h5">HeightM</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Monthly Report According to the WHO Starndarts
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="700"
          options={prepareChartData().options}
          series={prepareChartData().series}
        />
      </CardBody>
    </Card>
  );
};

export default HeightGraphM;
