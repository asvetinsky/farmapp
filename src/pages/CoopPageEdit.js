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

 

  console.log(coopData);

  const [state_door, setStateDoor] = useState("");
  const [time_to_open, setTimeToOpen] = useState("");
  const [time_to_close, setTimeToClose] = useState("");
  const [num_chickens, setNumChickens] = useState(0);
  const [num_chicken_in_coop, setNumChickensInCoop] = useState(0);

  useEffect(() => {
    const {
      state_door,
      time_to_open,
      time_to_close,
      num_chickens,
      num_chicken_in_coop
    } = coop;

    setStateDoor(state_door);
    setTimeToOpen(time_to_open);
    setTimeToClose(time_to_close);
    setNumChickens(num_chickens);
    setNumChickensInCoop(num_chicken_in_coop);
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
        state_door,
        time_to_open,
        time_to_close,
        num_chickens,
        num_chicken_in_coop
      );
     /* await axios.put(
        `https://guarded-inlet-61842.herokuapp.com/api/coop/${id_device}`,
        saveCoop
      );*/
      await axios({
        method: 'PUT',
        url: `https://guarded-inlet-61842.herokuapp.com/api/coop/${id_device}`,
        timeout: 3000,
        data: saveCoop,
        headers: {
            "Content-Type": "application/json",
        },
    });

      push(`/coop/${id}`);
    } catch (error) {}
  };


  const createCoopObject = () => {
    let coopNew = {
      ...coop,
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
    <Template 
      //coopData={coopData}
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
export default CoopPageEdit;