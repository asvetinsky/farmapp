import React from "react";
import { useHistory } from "react-router-dom";
import SiteLayout from "../organisms/SiteLayout";
import Loading from "../molecules/Loading";
import Error from "../molecules/Error";
import { Col, Row, Button, Switch  } from "antd";
import ContentHeading from "../atoms/ContentHeading";

const MainPageTemplate = ({coopsData}) => {

  const { push } = useHistory();
  const handleGoToCoopDetail = (id) => push(`/coop/${id}`);

  const { isLoading, coops, error } = coopsData;

  
  const renderCoops= () => {
    
    const renderCoops = coops.map(({id_device, state_door,time_to_open,time_to_close,num_chickens,num_chicken_in_coop}) => {
      return (
        <Col span={4} key={id_device} 
          onClick={() => handleGoToCoopDetail(id_device)}
        >
            <h1>id_device: {id_device}</h1>
            <div>state_door: {state_door ? 'Open' : 'Close'}</div>
            <div>time_to_open: {time_to_open}</div>
            <div>time_to_close: {time_to_close}</div>
            <div>num_chickens: {num_chickens}</div>
            <div>num_chicken_in_coop: {num_chicken_in_coop}</div>
        </Col>
        
      )
      
    })

   
      return renderCoops;
    
    
  };

  return (
      
    <SiteLayout>
        
      <Row justify="space-between" align="middle">
        <Col>
          <ContentHeading>Coops</ContentHeading>
        </Col>
        <Col>
        </Col>
      </Row>

      <Row>
        {renderCoops()}
      </Row>
      


    </SiteLayout>
    
  );
};

export default MainPageTemplate;