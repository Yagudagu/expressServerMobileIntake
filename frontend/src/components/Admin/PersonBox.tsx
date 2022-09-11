import React from "react";
import { People } from "../../models";

interface Props {
  person: People;
}

export const PersonBox: React.FC<Props> = ({ person }) => {
  return (
    <div>
      <div className="box-for">
        <h3>Family Name </h3>
        <h3>todo</h3>
      </div>
      <div className="box-for">
        <h3>Child or Adult</h3> <h3>{person.CA}</h3>
      </div>
      <div className="box-for">
        <h3>First Name</h3> <h3>{person.firstName}</h3>
      </div>
      <div className="box-for">
        <h3>Age </h3>
        <h3>{person.age}</h3>
      </div>
      <div className="box-for">
        <h3>Height Feet </h3>
        <h3>{person.heightFeet}</h3>
      </div>
      <div className="box-for">
        <h3>Height Inches </h3>
        <h3>{person.heightInches}</h3>
      </div>
      <div className="box-for">
        <h3>Gender</h3> <h3>{person.sex}</h3>
      </div>
      <div className="box-for">
        <h3>Shirt Size</h3> <h3>{person.shirtSize}</h3>
      </div>
      <div className="box-for">
        <h3>Pants Size </h3>
        <h3>{person.pantsSize}</h3>
      </div>
      <div className="box-for">
        <h3>Shoe Size </h3>
        <h3>{person.shoeSize}</h3>
      </div>
      <div className="box-for">
        <h3>Bra Size</h3> <h3>{person.braSize}</h3>
      </div>
      {/* <div className="box-for">
        <h3>Hat Cloat and Gloves</h3> <h3>{person.hatCoatGloves}</h3>
      </div> */}
      <div className="box-for">
        <h3>Anything Else </h3>
        <h3>{person.anythingElse}</h3>
      </div>
      <br />
    </div>
  );
};
