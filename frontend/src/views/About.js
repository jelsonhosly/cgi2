import React, { useState, useEffect } from 'react';
import { Row, Col, CardTitle, Card, CardBody, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ComponentCard from '../components/dashboard/ComponentCard';
import BabyPic from "../assets/images/users/baby.png";
import axios from 'axios'; // Import axios for making HTTP requests
import BMI from '../components/dashboard/BMI';

const About = () => {
  const [babyDetails, setBabyDetails] = useState(null); // State variable to store baby details

  useEffect(() => {
    // Fetch baby details from the server when the component mounts
    axios.get('http://localhost:5050/baby/1')
      .then(response => {
        setBabyDetails(response.data); // Set baby details in state
      })
      .catch(error => {
        console.error('Error fetching baby details:', error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  if (!babyDetails) {
    // Render loading indicator while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Row>
        <Col>
          <Card>
          <CardTitle tag="h6" className="border-bottom p-4 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About Your Child
          </CardTitle>
            <Col className="d-flex justify-content-center">
              <div className="mt-2">
                <ComponentCard title="About Your child">
                  <img src={BabyPic} alt="BabyPic" />
                  <h5 className="mt-2">Child Health Development Records</h5>
                </ComponentCard>
              </div>
            </Col>
          </Card>
        </Col>
        <Col>
            <BMI/>
        </Col>

      </Row>
      {/*parent can be requested to update */}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-4 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Identification Details
        </CardTitle>
        <CardBody>
          <Form>
            {/*Divition of Health Medical Officer, Divition of Family Welfare Officer, Birth Information Registration Number*/}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="DHMO">Divition of Health Medical Officer</Label>
                        <Input
                          id="DHMO"
                          name="text"
                          value={babyDetails.DHMO}
                          type="text"
                        />
                      </FormGroup>
                    </div>
                  </Col>
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="DFWO">Divition of Family Welfare Officer</Label>
                        <Input
                          id="DFWO"
                          name="text"
                          value={babyDetails.DFWO}
                          type="text"
                        />
                      </FormGroup>
                    </div>
                  </Col>
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="Birn">Birth Information Registration Number </Label>
                        <Input
                          id="Birn"
                          name="text"
                          value={babyDetails.Birn}
                          type="text"
                        />
                      </FormGroup>  
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/*Child's Name, Pragnant Mother Registration Number*/}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                  <Col xs="8">
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="ChildName">Child's Name</Label>
                        <Input
                          id="ChildName"
                          name="text"
                          value={babyDetails.ChildName}
                          type="text"
                        />
                      </FormGroup>
                    </div>
                  </Col>
                  <Col xs="4"> 
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="PMRN">Pragnant Mother Registration Number</Label>
                        <Input
                          id="PMRN"
                          name="text"
                          value={babyDetails.PMRN}
                          type="text"
                        />
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
                
              </Container>
            </div>
            {/*Date of Birth, Date of Register*/}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                    <Col>
                      <div className="bg-light p-2 border">
                        <FormGroup>
                          <Label for="DateOfBirth">Date of Birth</Label>
                          <br />
                          <DatePicker
                            id="DateOfBirth"
                            selected={new Date(babyDetails.DateOfBirth)}
                            className="form-control"
                          />
                        </FormGroup>
                      </div>
                    </Col>
                    <Col>
                      <div className="bg-light p-2 border">
                        <FormGroup>
                          <Label for="DateOfRegister">Date of Register</Label>
                          <br />
                          <DatePicker
                            id="DateOfRegister"
                            selected={new Date(babyDetails.DateOfRegister)}
                            className="form-control"
                          />
                        </FormGroup>
                      </div>
                    </Col>
                </Row>
                <Row>
                  
                </Row>
              </Container>
            </div>
            {/*Mothe's Name, Mother's Age*/}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                  <Col xs="8">
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="MotheName">Mothe's Name</Label>
                        <Input
                          id="MotheName"
                          name="text"
                          value={babyDetails.MotheName}
                          type="text"
                        />
                      </FormGroup>
                    </div>
                  </Col>
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="MotherAge">Mother's Age</Label>
                        <Input
                          id="MotherAge"
                          name="text"
                          value={babyDetails.MotherAge}
                          type="text"
                        />
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
                
              </Container>
            </div>
            {/*Address*/}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="Address">Address</Label>
                        <Input
                          id="Address"
                          name="text"
                          value={babyDetails.Address}
                          type="text"
                        />
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/*total children*/}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="ChildCount">Number of children alive including this child</Label>
                        <Input
                          id="ChildCount"
                          name="text"
                          value={babyDetails.ChildCount}
                          type="text"
                        />
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Form>
        </CardBody>
      </Card>
      {/*should be filled by a  hospital medical officer*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-4 mb-0">
          <i className="bi bi-bell me-2"> </i>
          It is be Filled by a  Hospital Medical Officer
        </CardTitle>
        <CardBody>
          <Form> 
            {/*Hospital Where delivery took place */}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="Hospital">Hospital Where delivery took place</Label>
                        <Input id="Hospital" name="text" value={babyDetails.Hospital} type="text" />
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/*Method Of Delivery, Vaginal Delivery,Apgar Score, Birth Weight*/}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                  <Col>
                    <div className="bg-light p-2 border">        
                      <FormGroup>
                        <Label for="DeliveryMethod">Method Of Delivery</Label>
                        <Input id="DeliveryMethod" name="select" value={babyDetails.DeliveryMethod} type="text" />
                      </FormGroup>
                    </div>
                  </Col>
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Row >
                          <h5 className='mb-0'>Apgar Score</h5>
                          <Col>
                            <Label for="Apgar1">1 minute</Label>
                            <Input id="Apgar1" name="text" value={babyDetails.Apgar1} type="text"/>
                          </Col>
                          <Col>
                            <Label for="Apgar2">5 minutes</Label>
                            <Input id="Apgar2" name="text" value={babyDetails.Apgar2} type="text"/>
                          </Col>
                          <Col>
                            <Label for="Apgar3">10 minutes</Label>
                            <Input id="Apgar3" name="text" value={babyDetails.Apgar3} type="text"/>
                          </Col>
                        </Row>
                      </FormGroup>
                    </div>
                  </Col>
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="Birn">Birth Weight</Label>
                        <Input id="Birn" name="text" value={babyDetails.BirthWeight} type="text"/>
                      </FormGroup>  
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/*Head Circumference at Birth,Length at Birth,Weight At Discharge,vitamin k */}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                  <Col>
                    <div className="bg-light p-2 border">        
                      <FormGroup>
                        <Label for="Circumference">Head Circumference at Birth</Label>
                        <Input id="Circumference" name="text" value={babyDetails.HeadCircumference} type="text"/>
                      </FormGroup>
                    </div>
                  </Col>
                  <Col>
                    <div className="bg-light p-2 border">        
                      <FormGroup>
                        <Label for="Circumference">Length at Birth</Label>
                        <Input id="Circumference" name="text" value={babyDetails.LengthAtBirth} type="text"/>
                      </FormGroup>
                    </div>
                  </Col>
                  <Col>
                    <div className="bg-light p-2 border">
                      <FormGroup>
                        <Label for="Birn">Weight At Discharge</Label>
                        <Input
                          id="Birn"
                          name="text"
                          value={babyDetails.WeightAtDischarge}
                          type="text"
                        />
                      </FormGroup>  
                    </div>
                  </Col>
                  <Col>
                    <div className="bg-light p-2 border">        
                      <FormGroup>
                        <Label for="VitaminK">Vitamin K</Label>
                        <Input id="VitaminK" name="select" value={babyDetails.VitaminK} type="text" />
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/*Breast Feeding */}
            <div className="mt-3">
              <Container>
                <Row className="mt-3">
                  <Col>
                    <div className="bg-light p-2 border">        
                      <FormGroup>
                        <Row >
                          <h5 className='mb-0'>Breast Feeding</h5>
                          <Col>
                            <Label for="Circumference">Did the mother start breastfeeding within an hour of the baby's birth?</Label>
                            <Input id="VitaminK" name="select" value={babyDetails.BreastfeedingStart} type="text" />
                          </Col>
                          <Col>
                            <Label for="Circumference">A state of mother's warmth?</Label>
                            <Input id="VitaminK" name="select" value={babyDetails.MotherWarmth} type="text" />
                          </Col>
                          <Col>
                          <Label for="Circumference">Baby's attachment status to the breast?</Label>
                            <Input id="VitaminK" name="select" value={babyDetails.BabyAttachment} type="text" />
                          </Col>
                        </Row>
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
