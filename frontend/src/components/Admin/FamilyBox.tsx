import React from "react";
import { HouseholdWith } from "../../models";

interface Props {
  household: HouseholdWith;
}

const FamilyBox: React.FC<Props> = ({ household }) => {
  return (
    <div>
      <div className="box-for">
        <h3>Family Name</h3> <h3>{household.familyName}</h3>
      </div>
      <div className="box-for">
        <h3>Street Address </h3>
        <h3>{household.streetAddress}</h3>
      </div>
      <div className="box-for">
        <h3>Zip Code</h3> <h3>{household.zipCode}</h3>
      </div>
      <div className="box-for">
        <h3>Phone Number</h3> <h3>{household.phoneNumber}</h3>
      </div>
      <div className="box-for">
        <h3>Country Of Origin</h3> <h3>{household.countryOfOrigin}</h3>
      </div>
      <div className="box-for">
        <h3>Days Available</h3> <h3>Todo, add days</h3>
      </div>
    </div>
  );
};

export default FamilyBox;
