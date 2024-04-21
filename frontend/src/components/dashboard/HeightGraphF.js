import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const HeightGraphF = () => {
  const chartoptions = {
    series: [
      {
        name: "Height",
        data: [0, 31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Weight",
        data: [0, 11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "sept",
        ],
      },
      colors: ['#FF5733', '#3498DB'],
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Height</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Monthly Report According to the WHO Starndarts
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default HeightGraphF;
