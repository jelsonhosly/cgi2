import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";


const tableData = [
  {
    Status:"done",
    Age	: "At birth",
    VaccineName	:"B.C.C",
    Date :"2015.05.17",
    BatchNO	: "0375",
    AEImmunization : "B.C.C Scar",
  },
  {
    Status:"done",
    Age	: "",
    VaccineName	:"B.C.C 2nd dose",
    Date :"",
    BatchNO	: "",
    AEImmunization : "",
  },
  {
    Status:"pending",
    Age	: "2 Months",
    VaccineName	:"Pentavalent 1",
    Date :"2015.07.15",
    BatchNO	: "124P4027B",
    AEImmunization : "",
  },
  {
    Status:"pending",
    Age	: "2 Months",
    VaccineName	:"OPV 1",
    Date :"2015.07.15",
    BatchNO	: "L5146",
    AEImmunization : "",
  },
  {
    Status:"pending",
    Age	: "4 Months",
    VaccineName	:"Pentavalent 2",
    Date :"2015.09.16",
    BatchNO	: "124P4002A",
    AEImmunization : "",
  },
  {
    Status:"pending",
    Age	: "4 Months",
    VaccineName	:"OPV 2",
    Date :"2015.09.16",
    BatchNO	: "L5233",
    AEImmunization : "",
  },

];

const Immunization = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h4">Immunization</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Immunization
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Status</th>
                <th>Age</th>
                <th>Vaccine Name</th>
                <th>Date</th>
                <th>Batch NO</th>
                <th>Adverse Effects<br/>after Immunization</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    {tdata.Status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.Status === "done" ? (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>
                    <h6 className="mb-0">{tdata.Age}</h6>
                  </td>
                  <td>
                    <h6 className="mb-0">{tdata.VaccineName}</h6>
                  </td>
                  <td>
                    <h6 className="mb-0">{tdata.Date}</h6>
                  </td>
                  <td>
                    <h6 className="mb-0">{tdata.BatchNO}</h6>
                  </td>
                  <td>{tdata.AEImmunization}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Immunization;
