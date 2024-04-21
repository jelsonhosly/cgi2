import React from 'react';
import { Row, Col, CardTitle, Card, CardBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ComponentCard from '../components/dashboard/ComponentCard';

const NeonatalExamination = () => {
  const components = [
    "Peripheries pink and warm",
    "Hydration",
    "Response to handling",
    "Capillary refilling time",
    "Pulse rate/volume",
    "Heart murmurs",
    "Femoral pulse",
    "Respiratory rate",
    "Grunting",
    "Intercostal/subcostal recession",
    "Tone",
    "OFC-300m.",
    "Fontanelle/suture line",
    "Eyes/red reflex",
    "Scalp",
    "Mouth/lips",
    "Palate",
    "Ears",
    "Abdomen",
    "Umbilicus",
    "Genitalia",
    "Anus",
    "Hips",
    "Spine",
    "Limbs",
    "Dysmorphic features",
    "Superficial infection skin/card",
    "Birth injuries",

  ];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-4 mb-0">
            <i className="bi bi-bell me-2"></i>
            Neonatal Examination
          </CardTitle>
          <CardBody>
            <Form>
              {/* Date */}
              <FormGroup>
                <Label for="date">Date</Label>
                <Input id="date" name="date" type="date" placeholder="date" />
              </FormGroup>

              {/* Maturity */}
              <FormGroup>
                <Label for="maturity">Maturity of baby</Label>
                <Input id="maturity" name="maturity" type="text" placeholder="Maturity of baby" />
              </FormGroup>
              {/* Baby's Growth */}
              <Row className="align-items-center">
                <Col sm={6} className="d-flex">
                  <h5 className="me-3">Baby's Growth</h5>
                  <FormGroup check className="me-3">
                    <Label check>
                      <Input type="checkbox" name="growth" value="SGA" /> SGA
                    </Label>
                  </FormGroup>
                  <FormGroup check className="me-3">
                    <Label check>
                      <Input type="checkbox" name="growth" value="AGA" /> AGA
                    </Label>
                  </FormGroup>
                  <FormGroup check className="me-3">
                    <Label check>
                      <Input type="checkbox" name="growth" value="LGA" /> LGA
                    </Label>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup className="mb-0">
                    <Label for="bloodGroup" className="mb-0">Baby's blood group</Label>
                    <Input type="select" name="bloodGroup" id="bloodGroup">
                      {bloodGroups.map((group, index) => (
                        <option key={index}>{group}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th colSpan="2">Status</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>Normal</th>
                    <th>Abnormal</th>
                  </tr>
                </thead>
                <tbody>
                  {components.map((component, index) => (
                    <tr key={index}>
                      <td>{component}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pulse oximetry */}
              <FormGroup row className="mb-3">
                <Label for="preDuctalSpO2" sm={3}>Pulse oximetry:</Label>
                <Col>
                  <Label for="preDuctalSpO2" md={6} className="p-2">pre Ductal SpO2 <Input type="text" name="preDuctalSpO2" id="preDuctalSpO2" placeholder="Pre ductal SpO2" /></Label>
                  <Label for="preDuctalSpO2" md={6} className="p-2">post Ductal SpO2<Input type="text" name="postDuctalSpO2" id="postDuctalSpO2" placeholder="post Ductal SpO2" /></Label>
                  <FormGroup check inline className="mt-3" >
                    <Label check>
                      <Input type="checkbox" name="pass" /> Pass
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" name="fail" /> Fail
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" name="referred" /> Referred
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              {/* Any other abnormalities */}
              <FormGroup row className="mb-3">
                <Label for="otherAbnormalities" sm={3}>Any other abnormalities:</Label>
                <Col sm={9}>
                  <Input type="text" name="otherAbnormalities" id="otherAbnormalities" />
                </Col>
              </FormGroup>
              {/* Action Taken */}
              <FormGroup>
                <Label for="actionTaken">Action taken</Label>
                <Input id="actionTaken" name="actionTaken" type="select">
                  <option>Transferred for special care</option>
                  <option>Discharged home</option>
                  <option>Other</option>
                </Input>
              </FormGroup>

              {/* Diagnosis at discharge */}
              <FormGroup>
                <Label for="diagnosis">Diagnosis at discharge</Label>
                <Input id="diagnosis" name="diagnosis" type="text" placeholder="Diagnosis at discharge" />
              </FormGroup>

              {/* Date of discharge */}
              <FormGroup>
                <Label for="dischargeDate">Date of discharge</Label>
                <Input id="dischargeDate" name="dischargeDate" type="date" placeholder="date" />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default NeonatalExamination;