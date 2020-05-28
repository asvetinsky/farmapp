import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Template from "../components/templates/CoopPageEditTemplate";

import useCoop from "../hooks/useCoop";
import axios from "axios";

const CoopPageEdit = () => {

  const { id } = useParams();
  const { push } = useHistory();
  const coopData = useCoop(id);
  const { coop } = coopData;

  //console.log(coopData);

  const [stateDoor, setStateDoor] = useState("");
  const [timeToOpen, setTimeToOpen] = useState("");
  const [timeToClose, setTimeToClose] = useState("");
  const [numChickens, setNumChickens] = useState(0);
  const [numChickensInCoop, setNumChickensInCoop] = useState(0);

  useEffect(() => {
    const {
      state_door,
      time_to_open,
      time_to_close,
      num_chickens,
      num_chicken_in_coop
    } = coop;
    setStateDoor(stateDoor);
    setTimeToOpen(timeToOpen);
    setTimeToClose(timeToClose);
    setNumChickens(numChickens);
    setNumChickensInCoop(numChickensInCoop);
  }, [coop]);

  const handleStateDoorChange = (value) => setStateDoor(value);
  const handleTimeToOpenChange = (value) => setTimeToOpen(value);
  const handletimeToCloseChange = (value) => setTimeToClose(value);
  const handleNumChickensChange = (value) => setNumChickens(value);
  const handleNumChickensInCoopChange = (value) => setNumChickensInCoop(value);

  const handleOnSaveClicked = async () => {
    const { id_device } = coop;
    try {
      const saveCoop = createCoopObject(
        /*state_door,
        time_to_open,
        time_to_close,
        num_chickens,
        num_chicken_in_coop*/
      );
      await axios.post(
        `https://guarded-inlet-61842.herokuapp.com/api/coop/${id_device}`,
        saveCoop
      );
      push(`/api/coop/${id_device}`);
    } catch (error) {}
  };


  const createCoopObject = () => {
    let coopNew = {
      ...coop,
      state_door: stateDoor,
      time_to_open: timeToOpen,
      time_to_close: timeToClose,
      num_chickens: numChickens,
      num_chicken_in_coop: numChickensInCoop,
    };
    Object.keys(coopNew).map((key) => {
      if (
        coopNew[key] === undefined ||
        coopNew[key] === "" ||
        coopNew[key] === 0
      ) {
        delete coopNew[key];
      }
      return true;
    });
    return coopNew;
  };
 
  return (
    <Template 
      coopData={coopData}
      //stateDoor={state_door}
      stateDoorChange={handleStateDoorChange}
      //timeToOpen={time_to_open}
      timeToOpenChange={handleTimeToOpenChange}
      //timeToClose={time_to_close}
      timeToCloseChange={handletimeToCloseChange}
      //numChickens={num_chickens}
      numChickensChange={handleNumChickensChange}
     // numChickensInCoop={num_chicken_in_coop}
      numChickensInCoopChange={handleNumChickensInCoopChange}
      onSaveClicked={handleOnSaveClicked}
    />
  );
};
export default CoopPageEdit;