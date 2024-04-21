import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody, Badge } from "reactstrap";

const BMI = () => {
  const [currentWeight, setCurrentWeight] = useState(null);
  const [currentHeight, setCurrentHeight] = useState(null);
  const [nextMonthWeight, setNextMonthWeight] = useState(null);
  const [nextMonthHeight, setNextMonthHeight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState(null);
  const [condition, setCondition] = useState(null);
  const childId = '1';

  useEffect(() => {
    // Fetch the last weight and height records for the child ID
    fetch(`http://localhost:5050/lastWeight/${childId}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentWeight(data.weight);
      })
      .catch((error) => console.error("Error fetching current weight:", error));

    fetch(`http://localhost:5050/lastHeight/${childId}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentHeight(data.height);
      })
      .catch((error) => console.error("Error fetching current height:", error));

    // Calculate the next month's weight and height based on growth rate (example)
    const growthRateWeight = 0.2; // Example growth rate for weight (in kg/month)
    const growthRateHeight = 0.5; // Example growth rate for height (in cm/month)
    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

    const predictedNextMonthWeight = currentWeight + growthRateWeight;
    const predictedNextMonthHeight = currentHeight + growthRateHeight;

    setNextMonthWeight(predictedNextMonthWeight.toFixed(2)); // Limit to two decimal places
    setNextMonthHeight(predictedNextMonthHeight);

    // Calculate BMI
    if (currentWeight !== null && currentHeight !== null) {
      const bmiValue = (currentWeight / ((currentHeight / 100) * (currentHeight / 100))).toFixed(2);
      setBMI(bmiValue);

      // Provide suggestions based on BMI
      if (bmiValue < 18.5) {
        setMessage("Underweight : Consider Increasing Weight.");
        setCondition("Bad");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Healthy weight : Maintain current Weight.");
        setCondition("Good");
      } else {
        setMessage("Overweight : Consider Reducing Weight.");
        setCondition("Bad");
      }
    }
  }, [childId, currentWeight, currentHeight, bmi]);

  return (
    <Card >
        <CardTitle tag="h6" className="border-bottom p-4 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Growth Indicator
        </CardTitle>
        <CardBody>
        <div className="mb-4">
          <h4 className="mb-4">Current Weight: {currentWeight} kg</h4>
          <h4>Current Height: {currentHeight} cm</h4>
        </div>
        {bmi && (
          <>
            <h4>BMI: {bmi}</h4>
            <div className="d-flex align-items-center">
                <h4 >Your Child Condition is : </h4>
              <Badge color={condition === "Good" ? "success" : "danger"} >
                <h4 >{condition}</h4>
              </Badge>
            </div>
            <h4 className="m-2">{message}</h4>
          </>
        )}
        <div className="mb-4 mt-4">
          <h4 className="mb-4">Expected Next Month's Weight: {nextMonthWeight} kg</h4>
          <h4 className="mb-4">Predicted Next Month's Height: {nextMonthHeight} cm</h4>
        </div>
       
      </CardBody>
    </Card>
  );
};

export default BMI;
