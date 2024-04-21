import {
  Card,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";

const GrowthDetails = () => {
  return (
    <div >
      <Row>
        <h5 className="mb-3 mt-3">Alignment Text</h5>
        <Col md="6" lg="3">
          <Card body className="text-center" >
            <CardTitle tag="h5">First Year</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-danger">View Details</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body className="text-center">
            <CardTitle tag="h5">Second Year</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-danger">View Details</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body className="text-center">
            <CardTitle tag="h5">Third Year</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-danger">View Details</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body className="text-center">
            <CardTitle tag="h5">Fouth Year</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-danger">View Details</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default GrowthDetails;
