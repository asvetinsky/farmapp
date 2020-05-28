import React from "react";
import { useHistory } from "react-router-dom";
import SiteLayout from "../organisms/SiteLayout";
import Loading from "../molecules/Loading";
import Error from "../molecules/Error";
import { Col, Row, Button, Input } from "antd";
import ContentHeading from "../atoms/ContentHeading";
import Recipes from "../organisms/Recipes";



const CoopPageEditTemplate = ({
  coopData,
  stateDoor,
  stateDoorChange,
  timeToOpen,
  timeToOpenChange,
  timeToClose,
  timeToCloseChange,
  numChickens,
  numChickensChange,
  numChickensInCoop,
  numChickensInCoopChange,
  onSaveClicked
  
  }) => {
  const { push } = useHistory();

  const { isLoading, error, coop } = coopData;
  const {
    id_device,
    state_door,
    time_to_open,
    time_to_close,
    num_chickens,
    num_chicken_in_coop,
    num_aggs,
  } = coop;

  const handleGoToCoops = () => push(`/`);

  return (
      
    <SiteLayout>
        
      <Row justify="space-between" align="middle">
        <Col>
          <ContentHeading>Coop - {id_device}</ContentHeading>
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
          placeholder="state_door"
          onChange={(e) => stateDoorChange(e.target.value)}
          value={state_door}
        />
          state door: {state_door ? 'Close' : 'Open'}
        </div>
        <div>
          time_to_open: {time_to_open}
        </div>
        <div>
          time_to_close: {time_to_close}
        </div>
          <div>num_chickens: {num_chickens}</div>
          <div>num_chicken_in_coop: {num_chicken_in_coop}</div>
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

export default CoopPageEditTemplate;