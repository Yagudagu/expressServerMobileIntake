import React, { useEffect, useState } from "react";
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
}

function Popup({ t, setPopup, people, selectedPersonIndex }: Props) {
  function returnToMainAndStore() {
    setPopup(false);
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <Languages />
        <PersonShared />

        {people[selectedPersonIndex].CA === "adult" && <Adult />}
        {people[selectedPersonIndex].CA === "child" && <Child />}

        <div className="close-btn" onClick={() => returnToMainAndStore()}>
          {t("add_and_return")}
        </div>
      </div>
    </div>
  );
}

export default Popup;
