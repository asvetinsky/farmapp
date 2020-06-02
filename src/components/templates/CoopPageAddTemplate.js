import React from "react";
import { useHistory } from "react-router-dom";
import SiteLayout from "../organisms/SiteLayout";
import { Col, Row, Button, Input } from "antd";
import ContentHeading from "../atoms/ContentHeading";



const CoopPageAddTemplate = ({
  id_device,
  stateIdDeviceChange,
  state_door,
  stateDoorChange,
  time_to_open,
  timeToOpenChange,
  time_to_close,
  timeToCloseChange,
  num_chickens,
  numChickensChange,
  num_chicken_in_coop,
  numChickensInCoopChange,
  onSaveClicked
  
  }) => {
  const { push } = useHistory();

  //console.log("CoopPageAddTemplate");
  //console.log(time_to_open);

  const handleGoToCoops = () => push(`/`);

  return (
      
    <SiteLayout>
        
      <Row justify="space-between" align="middle">
        <Col>
          <ContentHeading>New Coop</ContentHeading>
        </Col>
        <Col>
        <Button
              type="default"
              shape="round"
              size="large"
              icon={<i className="far fa-save"></i>}
              style={{ backgroundColor: "#28A745", color: "white" }}
              onClick={() => {
                onSaveClicked();
              }}
            >
              Uložit
            </Button>
        </Col>
      </Row>

      <Row>
        <Col>
        <div>
          <Input
          placeholder="id_device"
          onChange={(e) => stateIdDeviceChange(e.target.value)}
          value={id_device}
        />
        </div>
        <div>
          <Input
          placeholder="state_door"
          onChange={(e) => stateDoorChange(e.target.value)}
          value={state_door}
        />
        </div>
        <div>
          <Input
          placeholder="time to open"
          onChange={(e) => timeToOpenChange(e.target.value)}
          value={time_to_open}
        />
        </div>
        <div>
          <Input
          placeholder="time to close"
          onChange={(e) => timeToCloseChange(e.target.value)}
          value={time_to_close}
        />
        </div>
          <Input
          placeholder="num_chickens"
          onChange={(e) => numChickensChange(e.target.value)}
          value={num_chickens}
        />
          <Input
          placeholder="num_chicken_in_coop"
          onChange={(e) => numChickensInCoopChange(e.target.value)}
          value={num_chicken_in_coop}
        />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col >
          <Button onClick={handleGoToCoops}>Back to - Main Page</Button>
        </Col>
      </Row>
      

    </SiteLayout>
    
  );
};

export default CoopPageAddTemplate;