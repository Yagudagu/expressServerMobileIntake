import { t } from "i18next";
import React, { useContext } from "react";
import pantsMale from "../../../svgs/pants-other.svg";
import pantsFemale from "../../../svgs/pants-female.svg";
import pantsChild from "../../../svgs/shorts-pants.svg";
import { ContextMobile } from "../../../HomePage";

const pantsTag = require("../../../svgs/pants-tag.jpg");

const PantsSize = () => {
  const { handlePeopleChange, people, selectedPersonIndex, manPants } =
    useContext<any>(ContextMobile);

  if (people[selectedPersonIndex].CA === "child") {
    return (
      <div className="sections">
        <div>{t("pants_size")}</div>
        <div className="clothes-container">
          <img className="clothes-icons" src={pantsChild} alt="pants" />
          <input
            type="text"
            id="pants-size-child"
            placeholder="Toddler: O-4T or Child: 5-16"
            value={people[selectedPersonIndex].pantsSize}
            onChange={(e) =>
              handlePeopleChange({ pantsSize: e.currentTarget.value })
            }
          />
        </div>
      </div>
    );
  } else {
    return people[selectedPersonIndex].sex === "male" ? (
      <div className="sections">
        <div>{t("pants_size")}</div>
        <div className="clothes-container align-vert">
          <img className="clothes-icons" src={pantsMale} alt="pants" />
          {manPants && <div className="required-star">*</div>}

          <input
            type="text"
            id="waist-size"
            placeholder={t("waist_size")}
            value={people[selectedPersonIndex].waist}
            onChange={(e) =>
              handlePeopleChange({ waist: e.currentTarget.value })
            }
          />
          {manPants && <div className="required-star">*</div>}

          <input
            type="text"
            id="inseam-length"
            placeholder={t("inseam_length")}
            value={people[selectedPersonIndex].inseamLength}
            onChange={(e) =>
              handlePeopleChange({ inseamLength: e.currentTarget.value })
            }
          />
        </div>
        {manPants && <div>{t("man-pants")}</div>}
        {manPants && (
          <img
            className="pants-tag-photo"
            src={pantsTag}
            alt="showing where to find pants size"
          />
        )}
      </div>
    ) : (
      <div className="sections">
        <div>{t("pants_size")}</div>

        <img className="clothes-icons" src={pantsFemale} alt="female pants" />
        <input
          type="text"
          id="pants-size"
          placeholder="4  - 24"
          value={people[selectedPersonIndex].pantsSize}
          onChange={(e) =>
            handlePeopleChange({ pantsSize: e.currentTarget.value })
          }
        />
      </div>
    );
  }
};

export default PantsSize;
