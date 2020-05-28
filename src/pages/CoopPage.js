import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Template from "../components/templates/CoopPageTemplate";

import useCoop from "../hooks/useCoop";
import axios from "axios";

const CoopPage = () => {

  const { id } = useParams();
  const { push } = useHistory();
  const coopData = useCoop(id);

  console.log(coopData);
  
  return (
    <Template 
      coopData={coopData}
    
    />
  );
};
export default CoopPage;