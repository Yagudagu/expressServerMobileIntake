import React from "react";
import { People } from "../../models";

import Adult from "./Adult";
import Child from "./Child";
import Languages from "../Languages";
import PersonShared from "./PersonShared";

interface Props {
  t: any;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  people: People[];
  selectedPersonIndex: number;
  required: boolean;
  setRequired: React.Dispatch<React.SetStateAction<boolean>>;
  manPants: boolean;
  setManPants: React.Dispatch<React.SetStateAction<boolean>>;
}

function Popup({
  t,
  setPopup,
  people,
  selectedPersonIndex,
  required,
  setRequired,
  manPants,
  setManPants,
}: Props) {
  function returnToMainAndStore() {
    //Check if it's an man, and if yes make sure both pants are filled
    if (
      people[selectedPersonIndex].sex === "male" &&
      people[selectedPersonIndex].CA === "adult" &&
      // This part checks to make sure it's not one empty but the other full
      ((people[selectedPersonIndex].waist.length === 0 &&
        people[selectedPersonIndex].inseamLength.length !== 0) ||
        (people[selectedPersonIndex].waist.length !== 0 &&
          people[selectedPersonIndex].inseamLength.length === 0))
    ) {
      setManPants(true);
      return;
    }

    if (
      people[selectedPersonIndex].CA.length === 0 ||
      people[selectedPersonIndex].sex.length === 0 ||
      people[selectedPersonIndex].firstName.length === 0
    ) {
      setRequired(true);
      return;
    }

    setManPants(false);
    setPopup(false);
    setRequired(false);
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <Languages />
        <PersonShared />

        {people[selectedPersonIndex].CA === "adult" && <Adult />}
        {people[selectedPersonIndex].CA === "child" && <Child />}

        {(required || manPants) && (
          <div className="required">{t("required")}</div>
        )}
        <div className="close-btn" onClick={() => returnToMainAndStore()}>
          {t("add_and_return")}
        </div>
      </div>
    </div>
  );
}

export default Popup;
