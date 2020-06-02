import React from "react";
import { useHistory } from "react-router-dom";
import SiteLayout from "../organisms/SiteLayout";
import Loading from "../molecules/Loading";
import Error from "../molecules/Error";
import { Col, Row, Button } from "antd";
import ContentHeading from "../atoms/ContentHeading";
import Recipes from "../organisms/Recipes";



const MainPageTemplate = ({coopData}) => {
  const { push } = useHistory();

  const { isLoading, error, coop } = coopData;
  const {
    id_device,
    state_door,
    time_to_open,
    time_to_close,
    num_chickens,
    num_chicken_in_coop,
    url_images,
  } = coop;


  const handleGoToCoops = () => push(`/`);
  const handleGoToCoopEdit = () => push(`/coop/edit/${id_device}`);

  return (
      
    <SiteLayout>
        
      <Row justify="space-between" align="middle">
        <Col>
          <ContentHeading>Coop - {id_device}</ContentHeading>
        </Col>
        <Col>
        
        </Col>
      </Row>

      <Row>
        <Col>
        <img src={url_images} alt="coopImage" width="300"></img>
        <div>
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
          <Button onClick={handleGoToCoopEdit}>Edit</Button>
          <Button onClick={handleGoToCoops}>Back to - Main Page</Button>
        </Col>
      </Row>
      

    </SiteLayout>
    
  );
};

export default MainPageTemplate;