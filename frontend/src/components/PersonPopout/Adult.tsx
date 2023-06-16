import React, { useContext } from "react";

import { ContextMobile } from "../../HomePage";
import bra from "../../svgs/bra.svg";
import { t } from "i18next";
import ShirtSize from "./Selectors/ShirtSize";
import PantsSize from "./Selectors/PantsSize";
import ShoeSize from "./Selectors/ShoeSize";
import HatCoatGloves from "./Selectors/HatCoatGloves";
import AnythingElse from "./Selectors/AnythingElse";

const Adult = () => {
  const { handlePeopleChange, people, selectedPersonIndex } =
    useContext<any>(ContextMobile);
  return (
    <form id="form-information">
      <div className="sections">
        {people[selectedPersonIndex].sex && (
          <div>
            <ShirtSize />
            <PantsSize />
            <ShoeSize />

            {people[selectedPersonIndex].sex === "female" && (
              <div>
                <div>{t("bra_size")}</div>
                <img src={bra} className="clothes-icons" alt="bra" />
                <input
                  type="text"
                  id="bra-size"
                  placeholder="A, B, C, D, Other..."
                  onChange={(e) => {
                    handlePeopleChange({ braSize: e.target.value });
                  }}
                />
              </div>
            )}
            <HatCoatGloves />
            <AnythingElse />
          </div>
        )}
      </div>
    </form>
  );
};
export default Adult;
