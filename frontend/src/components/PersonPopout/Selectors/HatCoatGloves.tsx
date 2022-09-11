import { t } from "i18next";
import React, { useContext } from "react";
import { GiWinterGloves, GiWinterHat } from "react-icons/gi";
import { ContextMobile } from "../../../HomePage";
import coat from "../../../svgs/coat.svg";

const HatCoatGloves: React.FC = () => {
  const { handleChecksChange, people, selectedPersonIndex } =
    useContext<any>(ContextMobile);

  return (
    <div className="sections">
      <div>{t("hat_coat_gloves")}</div>
      <div id="hat-coat-gloves-container">
        <GiWinterHat className="clothes-icons" />
        <label id="hat-box" htmlFor="hat">
          <input
            type="checkbox"
            id="hat"
            checked={people[selectedPersonIndex].hatCoatGloves.hat}
            onChange={(e) =>
              handleChecksChange({ hat: e.currentTarget.checked })
            }
          />
          {t("hat")}
        </label>
        <img className="clothes-icons" src={coat} alt="coat" />
        <label id="coat-box" htmlFor="coat">
          <input
            type="checkbox"
            id="coat"
            checked={people[selectedPersonIndex].hatCoatGloves.coat}
            onChange={(e) =>
              handleChecksChange({ coat: e.currentTarget.checked })
            }
          />
          {t("coat")}
        </label>
        <GiWinterGloves className="clothes-icons" />{" "}
        <label id="gloves-box" htmlFor="gloves">
          <input
            type="checkbox"
            id="gloves"
            checked={people[selectedPersonIndex].hatCoatGloves.gloves}
            onChange={(e) =>
              handleChecksChange({ gloves: e.currentTarget.checked })
            }
          />
          {t("gloves")}
        </label>
      </div>
    </div>
  );
};

export default HatCoatGloves;
