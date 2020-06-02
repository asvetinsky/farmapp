import React from "react";
import { useHistory } from "react-router-dom";
import Template from "../components/templates/MainPageTemplate";

import useCoops from "../hooks/useCoops";
import axios from "axios";

const MainPage = () => {
  
  const { push } = useHistory();
  const coopsData = useCoops();
  const handleGoNewToCoop = () => push("/coop-add");

  //console.log(coopsData);

  return (
    <Template 
      coopsData={coopsData}
      onClickNewCoop={handleGoNewToCoop}
    />
  );
};
export default MainPage;