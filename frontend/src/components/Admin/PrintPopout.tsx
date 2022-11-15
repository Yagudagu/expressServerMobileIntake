import React, { useContext } from "react";
import { ContextAdmin } from "../../Admin";
import { HouseholdWith, People } from "../../models";
import FamilyBox from "./FamilyBox";
import { PersonBox } from "./PersonBox";

interface Props {
  dontDisplayHousehold: boolean;
  componentRef: any;
  printButtonRef: any;
  openHouseholdIndex: number;
  houseHolds: HouseholdWith[];
}

const PrintPopout: React.FC<Props> = ({
  dontDisplayHousehold,
  componentRef,
  printButtonRef,
  openHouseholdIndex,
  houseHolds,
}) => {
  const { handlePrint } = useContext(ContextAdmin);

  return (
    <div
      className="popup"
      style={dontDisplayHousehold ? { display: "none" } : {}}
    >
      <div className="popup-inner-admin" ref={componentRef}>
        <button onClick={handlePrint} ref={printButtonRef}>
          Print
        </button>
        <div className="btn" onClick={() => console.log("dicks")}>
          (x)
        </div>
        <FamilyBox household={houseHolds[openHouseholdIndex]} />
        {houseHolds[openHouseholdIndex].people.map((person: People) => {
          return <PersonBox key={person.id} person={person} />;
        })}
      </div>
    </div>
  );
};

export default PrintPopout;
