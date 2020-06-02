import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CoopPageAddTemplate from "../components/templates/CoopPageAddTemplate";

import useCoop from "../hooks/useCoop";
import axios from "axios";

const CoopPageAdd = () => {

  const { push } = useHistory();
  //const coopData = useCoop(id);
  //const { coop } = coopData;

 
  //console.log(coopData);

  const [id_device, setIdDevice] = useState("");
  const [state_door, setStateDoor] = useState(false);
  const [time_to_open, setTimeToOpen] = useState("");
  const [time_to_close, setTimeToClose] = useState("");
  const [num_chickens, setNumChickens] = useState(0);
  const [num_chicken_in_coop, setNumChickensInCoop] = useState(0);
 
  const handleIdDeviceChange = (value) => setIdDevice(value);
  const handleStateDoorChange = (value) => setStateDoor(value);
  const handleTimeToOpenChange = (value) => setTimeToOpen(value);
  const handletimeToCloseChange = (value) => setTimeToClose(value);
  const handleNumChickensChange = (value) => setNumChickens(value);
  const handleNumChickensInCoopChange = (value) => setNumChickensInCoop(value);

  const handleOnSaveClicked = async () => {
    //const { id_device } = coop;
    
    try {
      const saveCoop = createCoopObject(
        id_device,
        state_door,
        time_to_open,
        time_to_close,
        num_chickens,
        num_chicken_in_coop
      );

      await axios({
        method: 'POST',
        url: `https://guarded-inlet-61842.herokuapp.com/api/coop/${id_device}`,
        timeout: 3000,
        data: saveCoop,
        headers: {
            "Content-Type": "application/json",
        },
    });

      push(`/`);
    } catch (error) {}
  };


  const createCoopObject = () => {
    let coopNew = {
      id_device: id_device,
      state_door: state_door,
      time_to_open: time_to_open,
      time_to_close: time_to_close,
      num_chickens: num_chickens,
      num_chicken_in_coop: num_chicken_in_coop,
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
    <CoopPageAddTemplate 
      //coopData={coopData}
      id_device={id_device}
      stateIdDeviceChange={handleIdDeviceChange}
      state_door={state_door}
      stateDoorChange={handleStateDoorChange}
      time_to_open={time_to_open}
      timeToOpenChange={handleTimeToOpenChange}
      time_to_close={time_to_close}
      timeToCloseChange={handletimeToCloseChange}
      num_chickens={num_chickens}
      numChickensChange={handleNumChickensChange}
      num_chicken_in_coop={num_chicken_in_coop}
      numChickensInCoopChange={handleNumChickensInCoopChange}
      onSaveClicked={handleOnSaveClicked}
    />
  );
};
export default CoopPageAdd;