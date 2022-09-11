import { t } from "i18next";
import React, { useContext } from "react";
import { GiRunningShoe } from "react-icons/gi";
import { ContextMobile } from "../../../HomePage";

const ShoeSize: React.FC = () => {
  const { handlePeopleChange, people, selectedPersonIndex } =
    useContext<any>(ContextMobile);

  let place: string;
  people[selectedPersonIndex].sex === "male"
    ? (place = "7, 8, 9, 10, 11, 12, 13, etc.")
    : (place = "5, 6, 7, 8, 9, 10, 11, etc.");

  people[selectedPersonIndex].CA === "child" && (place = "Kids 1-13");

  return (
    <div className="sections">
      <div>{t("shoe_size")}</div>
      <GiRunningShoe className="clothes-icons" />
      <input
        type="text"
        id="shoe-size"
        placeholder={place}
        value={people[selectedPersonIndex].shoeSize}
        onChange={(e) =>
          handlePeopleChange({ shoeSize: e.currentTarget.value })
        }
      />
    </div>
  );
};

export default ShoeSize;
