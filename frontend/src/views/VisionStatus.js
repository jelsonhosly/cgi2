import React, { useState } from "react";
import {Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  Row} from "reactstrap";

const VisionStatus = () => {
  const [rSelected, setRSelected] = useState(null);

  const onRadioBtnClick = (rSelected) => {
    setRSelected(rSelected);
  };


  return (
    <div>
      {/***Sales & Feed***/}
      <Row>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Radio Buttons (Stateful Buttons)
            </CardTitle>
            <CardBody className="">
              <h5>Radio Buttons</h5>
              <ButtonGroup>
                <Button
                  color="primary"
                  onClick={() => onRadioBtnClick(1)}
                  active={rSelected === 1}
                >
                  One
                </Button>
                <Button
                  color="primary"
                  onClick={() => onRadioBtnClick(2)}
                  active={rSelected === 2}
                >
                  Two
                </Button>
                <Button
                  color="primary"
                  onClick={() => onRadioBtnClick(3)}
                  active={rSelected === 3}
                >
                  Three
                </Button>
              </ButtonGroup>
              <p className="mb-0">Selected: {rSelected}</p>
            </CardBody>
          </Card>
      </Row>
    </div>
  );
};

export default VisionStatus;
